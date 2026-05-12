from flask import Blueprint, request, jsonify

from config.db import DB
from models.Employee import Employee

employee_bp = Blueprint('employee_bp', __name__)

# GET ALL EMPLOYEES
@employee_bp.route('/employees', methods=['GET'])
def get_employees():

    employees = Employee.query.all()

    result = []

    for emp in employees:
        result.append(emp.to_dict())

    return jsonify(result)


# ADD EMPLOYEE
@employee_bp.route('/employees', methods=['POST'])
def add_employee():

    data = request.json

    new_employee = Employee(
        emp_code=data.get('emp_code'),
        name=data.get('name'),
        email=data.get('email'),
        phone=data.get('phone'),
        role=data.get('role'),
        department=data.get('department'),
        shift_timing=data.get('shift_timing'),
        salary=data.get('salary'),
        status=data.get('status')
    )

    DB.session.add(new_employee)

    DB.session.commit()

    return jsonify({
        "message": "Employee added successfully"
    })

@employee_bp.route('/delete-empty')
def delete_empty():

    empty_employee = Employee.query.get(2)

    DB.session.delete(empty_employee)

    DB.session.commit()

    return {
        "message": "Deleted"
    }



    DB.session.add(new_employee)

    DB.session.commit()

    return jsonify({
        "message": "Employee added successfully"
    })

# DELETE EMPLOYEE
@employee_bp.route('/employees/<int:id>', methods=['DELETE'])
def delete_employee(id):

    employee = Employee.query.get(id)

    if not employee:
        return jsonify({
            "message": "Employee not found"
        }), 404

    DB.session.delete(employee)

    DB.session.commit()

    return jsonify({
        "message": "Employee deleted successfully"
    })

# EMPLOYEE COUNT
@employee_bp.route('/employees/count', methods=['GET'])
def employee_count():

    count = Employee.query.count()

    return jsonify({
        "count": count
    })