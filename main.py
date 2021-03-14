from app import App
from flask import render_template
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import os
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from db import DB
from models.model import Model

app = App(name='Flask React Auth', debug=True, template_folder='frontend/build', static_folder='frontend/build/static')

@app.route('/')
def dashboard():
    return render_template('index.html')

@app.route('/<path:client>')
def pages(client):
    return render_template('index.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0')