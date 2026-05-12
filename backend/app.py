from flask import Flask
from flask_cors import CORS

from config.db import DB
from models.Employee import Employee
from routes.employee_routes import employee_bp
from models.Project import Project
from routes.project_routes import project_bp

app = Flask(__name__)

CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///bpo.db'

app.config['SECRET_KEY'] = 'secretkey'

DB.init_app(app)

app.register_blueprint(employee_bp)
app.register_blueprint(project_bp)

@app.route('/')
def home():
    return {
        "message": "BPO Backend Running"
    }

with app.app_context():
    DB.create_all()

if __name__ == '__main__':
    app.run(debug=True)