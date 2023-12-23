# database.py
from extensions import db

class Data(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    keyWord = db.Column(db.String(80), nullable=False)
    type = db.Column(db.String(80), nullable=False)
    detail = db.Column(db.String(200), nullable=False)
    useTime = db.Column(db.Integer, nullable=False)
    color = db.Column(db.String(30), nullable=False)
    varNum = db.Column(db.Integer, nullable=False)

    def to_dict(self):
        return {
            'keyWord': self.keyWord,
            'type': self.type,
            'detail': self.detail,
            'useTime': self.useTime,
            'color': self.color,
            'varNum': self.varNum
        }
