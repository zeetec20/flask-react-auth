import os

class Config:
    def debug(self, on: bool):
        os.environ['FLASK_DEBUG'] = str(int(on))

    def __init__(self, debug: bool):
        self.debug(debug)