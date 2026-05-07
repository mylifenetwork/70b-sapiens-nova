import os
from flask import Flask, send_from_directory

app = Flask(__name__)

STATIC_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "static")


@app.route("/")
def home():
    return send_from_directory(
        STATIC_DIR,
        "Sapiens Nova Academy - Embrace Your Future_ Innovate, Heal, Inspire.html",
    )


@app.route("/programs")
def programs():
    return send_from_directory(STATIC_DIR, "Programmes - Sapiens Nova Academy.html")


@app.route("/checkout")
def checkout():
    return send_from_directory(STATIC_DIR, "Enroll Now - Sapiens Nova Academy.html")


@app.route("/<path:filename>")
def static_files(filename):
    return send_from_directory(STATIC_DIR, filename)


if __name__ == "__main__":
    app.run(debug=True)
