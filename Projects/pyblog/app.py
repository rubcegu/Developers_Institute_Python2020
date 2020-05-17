import flask
app = flask.Flask(__name__)

# @app.route('/')
# def index():
# 	return "Hello, World"

@app.route("/home")
def home():
	html= '''
	<html>
		<head>
			<title>Home Page - Microblog</title>
		</head>
		<body>
			<h1>Welcome to my App</h1>
			<h2>Please Log In</h2>
		</body>
	</html>'''
	return html

@app.route("/home/<username>")
def welcome(username):
	html= '''
	<html>
		<head>
			<title>Welcome Page - Microblog</title>
		</head>
		<body>
			<h1>Hello, {}!</h1>
			<h2>Access to blog</h2>
		</body>
	</html>'''.format(username.title())
	return html

@app.route("/home/<username>/blog")
def blog(username):
	html= '''
	<html>
		<head>
			<title>Blog Page - Microblog</title>
		</head>
		<body>
			<h1>Perfect {}!</h1>
			<img src="https://morethanaflower.com/wp-content/uploads/2019/07/Welcome-to-the-blog2.jpg">
			<h2>Access to articles</h2>
		</body>
	</html>'''.format(username.title())
	return html

@app.route("/home/<username>/blog/articles")
def articles(username):
	html= '''
	<html>
		<head>
			<title>Articles Page - {}</title>
		</head>
		<body>
			<ul>
				<li>Health</li>
				<li>Business</li>
				<li>Tech</li>
			</ul>
		</body>
	</html>'''.format(username.title())
	return html

if __name__ == "__main__":
	app.run(debug=True, port=5000)
	