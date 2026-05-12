from config.db import DB

class Employee(DB.Model):

    __tablename__ = 'employees'

    id = DB.Column(DB.Integer, primary_key=True)

    emp_code = DB.Column(DB.String(20))

    name = DB.Column(DB.String(100))

    email = DB.Column(DB.String(100))

    phone = DB.Column(DB.String(20))

    role = DB.Column(DB.String(50))

    department = DB.Column(DB.String(50))

    shift_timing = DB.Column(DB.String(50))

    salary = DB.Column(DB.Integer)

    status = DB.Column(DB.String(20))

    def to_dict(self):

        return {
            "id": self.id,
            "emp_code": self.emp_code,
            "name": self.name,
            "email": self.email,
            "phone": self.phone,
            "role": self.role,
            "department": self.department,
            "shift_timing": self.shift_timing,
            "salary": self.salary,
            "status": self.status
        }