from flask import Flask, render_template
import writejson

app = Flask(__name__)

@app.route("/")
def maincontent():
    return render_template("maincontent1.html")

app.debug = True
app.config['TEMPLATES_AUTO_RELOAD'] = True
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

if __name__ == "__main__":
    app.run(host="127.0.0.3", port=5000, debug=True)
    # result = writejson.main() 
    # print(f'readjson() executed with result: {result}', flush=True)