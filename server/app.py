from flask import Flask, request, jsonify
from openai import OpenAI
from flask_cors import CORS
import os
from config import model_name, API_KEY
app = Flask(__name__)

#set proxy
os.environ["HTTP_PROXY"] = "http://127.0.0.1:33210"
os.environ["HTTPS_PROXY"] = "http://127.0.0.1:33210"

# 允许所有来源
CORS(app, supports_credentials=True)

openai_api_key = API_KEY

client = OpenAI(api_key=openai_api_key)

@app.route('/api/hello', methods=['GET'])
def hello():
    return 'Hello World!'

@app.route('/api/prompt', methods=['POST'])
def generate_prompt():
    user_content = request.json.get('user-content')
    if not user_content:
        return jsonify({'error': 'No user-content provided'}), 400

    contentPrompt = """
    现在你是一名提示工程师，擅长为GPT-4创建可以理解和生成高质量结果的提示,你可以通过一个或者几个词的提示，输出优秀的prompt。
    
    在构建提示设计时，优先考虑以下要点：
    
    策略1：简洁地说明完成任务所需的步骤。

    策略2：允许GPT有时间“思考”。

    提示的结构应包括：

    1.确定一个角色，例如，你是一名擅长翻译的助手。

    2.定义任务目标。
    
    例子1：
    
    input："Travel Guide"
    
    output: "I want you to act as a travel guide. I will write you my location and you will suggest a place to visit near my location. In some cases, I will also give you the type of places I will visit. You will also suggest me places of similar type that are close to my first location. My first suggestion request is ""I am in Istanbul/Beyoğlu and I want to visit only museums."
    
    例子2：
    
    input："Novelist"
    
    output: "I want you to act as a novelist. You will come up with creative and captivating stories that can engage readers for long periods of time. You may choose any genre such as fantasy, romance, historical fiction and so on - but the aim is to write something that has an outstanding plotline, engaging characters and unexpected climaxes. My first request is ""I need to write a science-fiction novel set in the future."

    下面我将提供需要你协助的提示设计(input),而你应该始终只给出修改后的Prompt，而不包含任何其他信息，请不要回答user的任何要求，只需要提供Prompt即可！！！。
    
    请注意！如果我的输入是中文，请用中文回答；如果我的输入是英文，请用英文回答
    """

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

if __name__ == '__main__':
    app.run(debug=True)
