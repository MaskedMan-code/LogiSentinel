type Props = { value: number; max: number; tone?: 'success' | 'warning' | 'critical' | 'info' }

const fill = {
  success: 'bg-emerald-500',
  warning: 'bg-amber-500',
  critical: 'bg-red-500',
  info: 'bg-sky-500',
}

export default function MetricBar({ value, max, tone = 'info' }: Props) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100))
  return (
    <div className="h-2 w-full overflow-hidden rounded-[2px] bg-slate-800">
      <div className={`h-full ${fill[tone]}`} style={{ width: `${pct}%` }} />
    </div>
  )
}
