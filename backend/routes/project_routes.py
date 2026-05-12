from flask import Blueprint, request, jsonify

from config.db import DB
from models.Project import Project

project_bp = Blueprint('project_bp', __name__)

# GET PROJECTS
@project_bp.route('/projects', methods=['GET'])
def get_projects():

    projects = Project.query.all()

    result = []

    for project in projects:
        result.append(project.to_dict())

    return jsonify(result)


# ADD PROJECT
@project_bp.route('/projects', methods=['POST'])
def add_project():

    data = request.json

    new_project = Project(
        project_code=data.get('project_code'),
        name=data.get('name'),
        client=data.get('client'),
        deadline=data.get('deadline'),
        status=data.get('status'),
        description=data.get('description')
    )

    DB.session.add(new_project)

    DB.session.commit()

    return jsonify({
        "message": "Project added successfully"
    })