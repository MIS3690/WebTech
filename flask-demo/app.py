from flask import Flask
app = Flask(__name__)

@app.route('/')
@app.route('/hello/<name>')
def hello(name=None):
    if name is not None:
        return f'<h1>Hello, {name}!</h1> <p>I am excited to learn Flask, which is awesome!</p>'
        # return render_template("hello.html", name=name)
    return 'Hello, world!'

    
if __name__ == "__main__":
    app.run(debug=True)