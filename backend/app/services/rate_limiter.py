from collections import defaultdict, deque
from datetime import datetime, timedelta, timezone


class InMemoryRateLimiter:
    def __init__(self, per_minute: int = 10, per_hour: int = 100, per_day: int = 500):
        self.per_minute = per_minute
        self.per_hour = per_hour
        self.per_day = per_day
        self._events = defaultdict(deque)

    def allow(self, key: str) -> bool:
        now = datetime.now(timezone.utc)
        window = self._events[key]
        cutoff = now - timedelta(days=1)

        while window and window[0] < cutoff:
            window.popleft()

        per_day = len(window)
        per_hour = sum(1 for ts in window if ts >= now - timedelta(hours=1))
        per_minute = sum(1 for ts in window if ts >= now - timedelta(minutes=1))

        if per_minute >= self.per_minute or per_hour >= self.per_hour or per_day >= self.per_day:
            return False

        window.append(now)
        return True
