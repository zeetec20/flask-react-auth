from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import sessionmaker

Model = declarative_base()
class User(Model):
    __tablename__ = 'user'

    id = Column(Integer, primary_key=True)
    email = Column(String(225))
    password = Column(String(225))
    token = Column(String(225))
    name = Column(String(225))

models = {
    'User': User,
}