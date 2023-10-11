from flask import Flask, render_template

app = Flask(__name__)

app.debug =True

@app.route("/")
def hello_world():
    return render_template("maincontent1.html")

if __name__ == "__main__":
    app.run(port='5000')