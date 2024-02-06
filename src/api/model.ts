import axios, { AxiosResponse } from 'axios';

// API的URL
const apiUrl = "https://open.bigmodel.cn/api/paas/v4/chat/completions";
const apiKey = "eyJhbGciOiJIUzI1NiIsInNpZ25fdHlwZSI6IlNJR04iLCJ0eXAiOiJKV1QifQ.eyJhcGlfa2V5IjoiYzg3NzU1NzY2YmYyYWY2OTZlOGZlZjNhNzE1ZmYyZjIiLCJleHAiOjE3MDcyNTE4NTA2MTUsInRpbWVzd"
const userContent = "帮我写一首诗";
const contentPrompt = "you are a helpful assistant";

// 请求的body
const body = {
    model: "glm-4",
    messages: [
        {
            "role": "system",
            "content": contentPrompt,
        },
        {
            "role": "user",
            "content": userContent,
        },
    ],
    max_tokens: 150,
    temperature: 0.5,
};

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `${apiKey}`,
};

// 发送POST请求
export async function glmTest(): Promise<string> {
    try {
        const response: AxiosResponse = await axios.post(apiUrl, body, { headers });
        if (response.status === 200) {
            // 解析响应内容
            const completion = response.data;
            const response_message = completion.choices[0].message.content || "No response";
            return response_message;
        } else {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    } catch (error) {
        console.error('请求失败', error);
        throw error;
    }
}