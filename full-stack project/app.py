from flask import Flask, render_template, url_for, redirect

app = Flask(__name__)



@app.route("/")
def home():
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/movies")
def movies():
    return render_template("movies.html")

@app.route("/previousmovies")
def previousmovies():
    return render_template("previousmovies.html")

@app.route("/previoustvshows")
def previoustvshows():
    return render_template("previoustvshows.html")

@app.route("/tvshows")
def tvshows():
    return render_template("tvshows")

@app.errorhandler(404)
def page_not_found(e):
    return render_template("404.html"),
    404

@app.errorhandler(500)
def internet_server_error(e):
    return render_template("500.html"),
    500

    
if __name__ == "__main__":
    app.run(debug=True, port=8000)