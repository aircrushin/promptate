from flask import Flask, request, jsonify
from openai import OpenAI
from flask_cors import CORS
import os
from database import db, Data, User
from config import model_name, API_KEY, prompt_generator, prompt_optimizer, prompt_midjourney
from werkzeug.security import generate_password_hash, check_password_hash

#set flask configs
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///promptate.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

#set proxy
os.environ["HTTP_PROXY"] = "http://127.0.0.1:33210"
os.environ["HTTPS_PROXY"] = "http://127.0.0.1:33210"
openai_api_key = API_KEY
client = OpenAI(api_key=openai_api_key)
#init database
db.init_app(app)

# 允许所有来源
CORS(app, supports_credentials=True)

@app.before_request
def create_tables():
    db.create_all()

@app.route('/api/hello', methods=['GET'])
def hello():
    return 'Hello World!'

#查询所有数据
@app.route('/api/queryAllData', methods=['GET'])
def get_all_data():
    entries = Data.query.all()
    return jsonify([entry.to_dict() for entry in entries])

#增加一条数据
@app.route('/api/data', methods=['POST'])
def create_data():
    data_json = request.json
    new_data = Data(
        keyWord=data_json['keyWord'],
        type=data_json['type'],
        detail=data_json['detail'],
        useTime=data_json['useTime'],
        color=data_json['color'],
        varNum=data_json['varNum']
    )
    db.session.add(new_data)
    db.session.commit()
    return jsonify(new_data.to_dict()), 201

#查询一条数据
@app.route('/api/data/<int:id>', methods=['GET'])
def get_data(id):
    data = Data.query.get_or_404(id)
    return jsonify(data.to_dict())

#更新一条数据
@app.route('/api/data/<int:id>', methods=['PUT'])
def update_data(id):
    data = Data.query.get_or_404(id)
    data_json = request.json
    data.keyWord = data_json.get('keyWord', data.keyWord)
    data.type = data_json.get('type', data.type)
    data.detail = data_json.get('detail', data.detail)
    data.useTime = data_json.get('useTime', data.useTime)
    data.color = data_json.get('color', data.color)
    data.varNum = data_json.get('varNum', data.varNum)
    db.session.commit()
    return jsonify(data.to_dict())

#删除一条数据
@app.route('/api/data/<int:id>', methods=['DELETE'])
def delete_data(id):
    data = Data.query.get_or_404(id)
    db.session.delete(data)
    db.session.commit()
    return jsonify({'message': 'Data deleted'})
    

@app.route('/api/prompt', methods=['POST'])
def generate_prompt():
    user_content = request.json.get('user-content')
    if not user_content:
        return jsonify({'error': 'No user-content provided'}), 400

    contentPrompt = prompt_generator

    completion = client.chat.completions.create(
        model=model_name,
        messages=[
            {"role": "system", "content": contentPrompt},
            {"role": "user", "content": user_content}
        ],
        max_tokens=150,
        temperature=0.5,
    )

    # 将 ChatCompletionMessage 对象转换为可序列化的格式
    response_message = completion.choices[0].message.content if completion.choices[0].message else "No response"

    return jsonify({"response": response_message})

@app.route('/api/optimize', methods=['POST'])
def optimize():
    user_content = request.json.get('user-content')
    if not user_content:
        return jsonify({'error': 'No user-content provided'}), 400

    contentPrompt = prompt_optimizer

    completion = client.chat.completions.create(
        model=model_name,
        messages=[
            {"role": "system", "content": contentPrompt},
            {"role": "user", "content": user_content}
        ],
        max_tokens=150,
        temperature=0.5,
    )

    # 将 ChatCompletionMessage 对象转换为可序列化的格式
    response_message = completion.choices[0].message.content if completion.choices[0].message else "No response"

    return jsonify({"response": response_message})

@app.route('/api/promptMid', methods=['POST'])
def generate_prompt_mid():
    user_content = request.json.get('user-content')
    if not user_content:
        return jsonify({'error': 'No user-content provided'}), 400

    contentPrompt = prompt_midjourney

    completion = client.chat.completions.create(
        model=model_name,
        messages=[
            {"role": "system", "content": contentPrompt},
            {"role": "user", "content": user_content}
        ],
        max_tokens=200,
        temperature=0.8,
    )

    # 将 ChatCompletionMessage 对象转换为可序列化的格式
    response_message = completion.choices[0].message.content if completion.choices[0].message else "No response"

    return jsonify({"response": response_message})

@app.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()

    # 确认数据有效性
    username = data.get('username')
    password = data.get('password')
    if not username or not password:
        return jsonify({'message': 'Missing username or password'}), 400

    # 检查用户名是否已存在
    if User.query.filter_by(username=username).first():
        return jsonify({'message': 'Username already exists'}), 400

    # 创建新用户
    hashed_password = generate_password_hash(password)
    new_user = User(username=username, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'User created successfully', 'user': new_user.to_dict()}), 201

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()

    username = data.get('username')
    password = data.get('password')
    if not username or not password:
        return jsonify({'message': 'Missing username or password'}), 400

    # 检查用户是否存在
    user = User.query.filter_by(username=username).first()
    if user and check_password_hash(user.password, password):
        # 在这里，你应该生成并返回一个认证令牌
        return jsonify({'message': 'Login successful', 'user': user.to_dict()}), 200
    else:
        return jsonify({'message': 'Invalid credentials'}), 401

if __name__ == '__main__':
    app.run(debug=True)
