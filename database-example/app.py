import sqlite3
from venv import create
from flask import flask,render_template

app = flask(__name__)

def get_db_connection():
    conn = sqlite3.connect("database.db")
    conn.row_factory = sqlite3.Row
    return conn

@app.route("/")
def home():
    conn = get_db_connection
    posts = conn.execute("SELECT* FROM posts").fetchall()
    conn.close()
    return render_template("index.html,
    posts=posts")

@app.route("/create/", methods =("GET, "POST"))
def create
    return render_template("create.html")

if __name__ =="_main_":
    app.run(debug=true, port =8000)