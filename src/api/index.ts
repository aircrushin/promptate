import axios from "axios";

export function hello() {
    return axios.get("/api/hello")
}

export function generatePrompt(message: string) {
  return axios.post("/api/prompt", {
    "user-content": message
  })
}

export function optimizePrompt(message: string) {
  return axios.post("/api/optimize", {
    "user-content": message
  })
}