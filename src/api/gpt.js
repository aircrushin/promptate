const API_KEY = 'sess-7KZWK9vWwzg81K51QMbuP30wEA7OP7jo7OpCdIGw'; // 将 YOUR_API_KEY 替换为你的实际 API 密钥
const model = 'gpt-3.5-turbo'; // 可以根据需要选择不同的模型

async function callChatAPI(messages) {
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: model,
                messages: messages
            })
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error calling OpenAI Chat API:', error);
    }
}

// 使用示例
// const messages = [{ role: "system", content: "You are a helpful assistant." }];
// callChatAPI(messages).then(data => {
//     console.log(data);
// });
