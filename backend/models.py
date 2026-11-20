from sqlalchemy import Column, Integer, String, Text, DateTime
from sqlalchemy.sql import func

from database import Base


class Idea(Base):

    __tablename__ = "ideas"

    id = Column(Integer, primary_key=True, index=True)

    idea_text = Column(Text, nullable=False)

    startup_name = Column(String(200))
    industry = Column(String(200))
    problem = Column(Text)
    solution = Column(Text)
    target_audience = Column(Text)
    summary = Column(Text)

    created_at = Column(DateTime(timezone=True), server_default=func.now())