import os
from pathlib import Path
from dotenv import load_dotenv
from tavily import TavilyClient

# Load environment variables from backend/.env
env_path = Path(__file__).resolve().parents[1] / ".env"
load_dotenv(env_path)

# Connect to Tavily
client = TavilyClient(
    api_key=os.getenv("TAVILY_API_KEY")
)


def search_web(query):
    try:
        response = client.search(
            query=query,
            search_depth="basic",
            max_results=5
        )

        results = []

        for item in response.get("results", []):
            results.append({
                "title": item.get("title"),
                "url": item.get("url"),
                "content": item.get("content")
            })

        return results

    except Exception as e:
        print("Tavily Search Error:", str(e))
        return []