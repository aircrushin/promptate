import axios from "axios";

export function hello() {
    return axios.get("/api/hello")
}

export function generatePrompt(message: any) {
  return axios.post("/api/prompt", {
    "user-content": message
  })
}
