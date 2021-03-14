from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import models.model as Model
import sys

class DB:
    engine = create_engine('sqlite:///db.db')

    def execute(self):
        Session = sessionmaker(bind=DB.engine)
        return Session()

if __name__ == '__main__':
    argument = sys.argv
    for arg in argument:
        if '--drop' in arg:
            table = arg.split('=')[1]
            Model.models[table].__table__.drop(DB.engine)
        if '--migrations' == arg:
            Model.Model.metadata.create_all(DB.engine)
        
