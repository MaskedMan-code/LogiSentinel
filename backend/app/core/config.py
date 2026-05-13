from functools import lru_cache
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    app_name: str = "Secure Fleet Intelligence Agent"
    app_env: str = "development"
    app_host: str = "0.0.0.0"
    app_port: int = 8000
    cors_origins: str = "http://localhost:5173"

    gemini_api_key: str = ""
    gemini_model: str = "gemini-1.5-flash"

    requests_per_minute: int = 10
    requests_per_hour: int = 100
    requests_per_day: int = 500

    sqlite_path: str = "./data/app.db"


@lru_cache
def get_settings() -> Settings:
    return Settings()
