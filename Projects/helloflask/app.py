import flask
myapp = flask.Flask(__name__)
@myapp.route("/")
def index():
	return "Welcome to the jungle!"