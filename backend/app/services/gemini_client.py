from typing import List


class GeminiClient:
    def __init__(self, api_key: str, model: str):
        self.api_key = api_key
        self.model = model
        self._available = bool(api_key)

    def generate(self, prompt: str, context: List[str] | None = None) -> str:
        if not self._available:
            context_text = "\n".join(context or [])
            return (
                "MOCK_RESPONSE (Gemini key not configured)\n"
                f"Prompt: {prompt}\n"
                f"Context preview: {context_text[:800]}"
            )

        try:
            from google import genai
            client = genai.Client(api_key=self.api_key)
            response = client.models.generate_content(
                model=self.model,
                contents=prompt if not context else "\n\n".join(context + [prompt]),
            )
            return getattr(response, "text", "") or "No text returned."
        except Exception as exc:  # pragma: no cover
            return f"Gemini call failed: {exc}"
