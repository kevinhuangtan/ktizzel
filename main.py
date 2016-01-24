from flask import Flask
from flask import Blueprint, send_file
from flask import render_template
import os

app = Flask(__name__)
# app.secret_key = 'adfiauhasdfadff8q34r8qb9fqb3'

print "Starting webapp!"

@app.route('/', methods=['GET','POST'])
def home():
	return render_template('home.html')


@app.route('/resume', methods=("GET", "POST"))
def resume():
	return send_file('static/cv.pdf')


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
	print port
    app.run(host='0.0.0.0', port=port)
