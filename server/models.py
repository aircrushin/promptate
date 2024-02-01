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

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username
            # 注意：不要返回密码
        }

class CommunityData(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    src = db.Column(db.String(255))  # 存储图片链接
    title = db.Column(db.String(80), nullable=False)
    content = db.Column(db.String(500), nullable=False)  # 增加字符限制以适应内容长度
    type = db.Column(db.String(80), nullable=False)  # 类型，如“写作辅助”

    def to_dict(self):
        return {
            'src': self.src,
            'title': self.title,
            'content': self.content,
            'type': self.type
        }