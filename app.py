from flask import Flask
from config import Config
import sqlite3 as sql

class App(Flask):
    db_conn: sql.Connection = None

    def __init__(self, name: str, debug: bool, template_folder:str='templates', static_folder:str='static', *args, **kwargs):
        Config(debug=debug)
        super().__init__(import_name=name, template_folder=template_folder, static_folder=static_folder)