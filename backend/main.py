from fastapi import FastAPI
from database import engine, Base
import models
from routes.idea_routes import router as idea_router
app = FastAPI(title="WorthIt AI")
app.include_router(
    idea_router,
    prefix="/api/ideas",
    tags=["Ideas"]
)
# Create database tables
Base.metadata.create_all(bind=engine)


@app.get("/")
def home():
    return {
        "message": "Welcome to WorthIt AI Backend!"
    }


@app.get("/api/health")
def health():
    return {
        "status": "Backend is working successfully"
    }