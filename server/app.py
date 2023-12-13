from flask import Flask, request, jsonify
from openai import OpenAI
from flask_cors import CORS

app = Flask(__name__)

# 允许所有来源
CORS(app, supports_credentials=True)

openai_api_key = "sess-7KZWK9vWwzg81K51QMbuP30wEA7OP7jo7OpCdIGw"

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
    现在你是一名提示工程师，擅长为GPT-4创建可以理解和生成高质量结果的提示。在构建提示设计时，优先考虑以下要点：

    思维链：逐步思考，将复杂任务拆分成较简单的子任务。策略：简洁地说明完成任务所需的步骤。

    策略：允许GPT有时间“思考”。

    策略：提供示例。

    提示的结构应包括：

    确定一个角色，例如，你是一名擅长翻译的助手。

    定义任务目标。

    限制输出格式，以便易于程序解析，例如JSON或以特殊字符分隔的文本，不包含多余信息。

    下面我将提供需要你协助的提示设计和写作任务。

    你应该始终以“Prompt：xxx”的格式向我提供提示。请注意！如果我的输入是中文，请用中文回答；如果我的输入是英文，请用英文回答
    """

    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": contentPrompt},
            {"role": "user", "content": user_content}
        ],
        max_tokens=200,
        temperature=0.7,
    )

    # 将 ChatCompletionMessage 对象转换为可序列化的格式
    response_message = completion.choices[0].message.content if completion.choices[0].message else "No response"

    return jsonify({"response": response_message})

if __name__ == '__main__':
    app.run(debug=True)
