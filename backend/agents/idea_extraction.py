import os
import json
from pathlib import Path
from groq import Groq
from dotenv import load_dotenv

# Load API key from backend/.env
env_path = Path(__file__).resolve().parents[1] / ".env"
load_dotenv(env_path)

# Connect to Groq
client = Groq(api_key=os.getenv("GROQ_API_KEY"))


def extract_idea(idea_text):

    prompt = f"""
    Analyze the following startup idea.

    Extract these details:
    1. Startup name
    2. Industry
    3. Problem
    4. Proposed solution
    5. Target audience
    6. Short summary

    Return the result using exactly these JSON keys:
    startup_name, industry, problem, solution, target_audience, summary.

    Startup Idea:
    {idea_text}
    """

    response = client.chat.completions.create(
        model="openai/gpt-oss-120b",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ],
        response_format={"type": "json_object"}
    )

    result = response.choices[0].message.content

    data = json.loads(result)

    extracted_details = {
        "startup_name": data.get("startup_name") or data.get("Startup name"),
        "industry": data.get("industry") or data.get("Industry"),
        "problem": data.get("problem") or data.get("Problem"),
        "solution": data.get("solution") or data.get("proposed_solution") or data.get("Proposed solution"),
        "target_audience": data.get("target_audience") or data.get("Target audience"),
        "summary": data.get("summary") or data.get("short_summary") or data.get("Short summary")
    }

    return extracted_details