from flask import Blueprint, jsonify, request
from models import ShareData
from extensions import db

share_data_blueprint = Blueprint('share_data_blueprint', __name__)

# 查询所有数据
@share_data_blueprint.route('/api/shareData', methods=['GET'])
def get_all_comData():
    entries = ShareData.query.all()
    return jsonify([entry.to_dict() for entry in entries])

# 增加一条数据
@share_data_blueprint.route('/api/shareData', methods=['POST'])
def create_comData():
    data_json = request.json
    new_data = ShareData(
        src=data_json['src'],
        title=data_json['title'],
        content=data_json['content'],
        type=data_json['type']
    )
    db.session.add(new_data)
    db.session.commit()
    return jsonify(new_data.to_dict()), 201