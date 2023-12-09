import type { ChatMessage } from "../types";

const API_KEY = "sess-7KZWK9vWwzg81K51QMbuP30wEA7OP7jo7OpCdIGw"
export async function chat(messageList: ChatMessage[]) {
  try {
      const result = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "post",
        // signal: AbortSignal.timeout(8000),
        // 开启后到达设定时间会中断流式输出
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          stream: true,
          messages: messageList,
        }),
      });
      return result;
  } catch (error) {
    throw error;
  }
}
