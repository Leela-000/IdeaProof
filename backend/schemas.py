from pydantic import BaseModel


class IdeaCreate(BaseModel):
    idea_text: str


class IdeaResponse(BaseModel):
    id: int
    idea_text: str

    class Config:
        from_attributes = True