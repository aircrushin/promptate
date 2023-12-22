from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///promptate.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
    
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
        
@app.before_request
def before_request():
    db.create_all()

@app.route('/data', methods=['GET'])
def get_data():
    entries = Data.query.all()
    return jsonify([entry.to_dict() for entry in entries])

if __name__ == '__main__':
    app.run(debug=True)
