from config.db import DB

class Project(DB.Model):

    __tablename__ = 'projects'

    id = DB.Column(DB.Integer, primary_key=True)

    project_code = DB.Column(DB.String(20))

    name = DB.Column(DB.String(100))

    client = DB.Column(DB.String(100))

    deadline = DB.Column(DB.String(50))

    status = DB.Column(DB.String(50))

    description = DB.Column(DB.Text)

    def to_dict(self):

        return {
            "id": self.id,
            "project_code": self.project_code,
            "name": self.name,
            "client": self.client,
            "deadline": self.deadline,
            "status": self.status,
            "description": self.description
        }