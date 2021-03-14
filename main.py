from app import App
from flask import render_template
import os

app = App(name='Flask React Auth', debug=True, template_folder='frontend/build', static_folder='frontend/build/static')

@app.route('/')
def dashboard():
    return render_template('index.html')

@app.route('/<path:client>')
def pages(client):
    return render_template('index.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0')