from flask import Flask, request, jsonify
from openai import OpenAI
from flask_cors import CORS
import os
from flask_jwt_extended import JWTManager, jwt_required, get_jwt_identity
from models import db
from config import model_name, API_KEY, prompt_generator, prompt_optimizer, prompt_midjourney, ConfigClass
from routes.data_routes import data_blueprint
from routes.community_data_routes import community_data_blueprint
from routes.auth_routes import auth_blueprint

#set flask configs
app = Flask(__name__)
app.config.from_object(ConfigClass)

#set proxy
os.environ["HTTP_PROXY"] = "http://127.0.0.1:33210"
os.environ["HTTPS_PROXY"] = "http://127.0.0.1:33210"

#openai
openai_api_key = API_KEY
client = OpenAI(api_key=openai_api_key)

##init app
jwt = JWTManager(app)
db.init_app(app)

# 允许所有来源
CORS(app, supports_credentials=True)

#routes
app.register_blueprint(data_blueprint)
app.register_blueprint(community_data_blueprint)
app.register_blueprint(auth_blueprint)

@app.before_request
def create_tables():
    db.create_all()

@app.route('/api/hello', methods=['GET'])
def hello():
    return 'Hello World!'

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

# 受保护的路由
@app.route('/api/protected', methods=['GET'])
@jwt_required()
def protected():
    current_user = get_jwt_identity()
    return jsonify({'logged_in_as': current_user}), 200

if __name__ == '__main__':
    app.run(debug=True)