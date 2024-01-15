import axios from "axios";

export function hello() {
    return axios.get("/api/hello")
}

export function queryAllData() {
  return axios.get("/api/queryAllData")
}

export function generatePrompt(message: string) {
  return axios.post("/api/prompt", {
    "user-content": message
  })
}

export function generatePromptMid(message: string) {
  return axios.post("/api/promptMid", {
    "user-content": message
  })
}

export function optimizePrompt(message: string) {
  return axios.post("/api/optimize", {
    "user-content": message
  })
}

export function register(username: string, password: string) {
  return axios.post("/api/register", {
    username: username,
    password: password
  });
}

export function login(username: string, password: string) {
  return axios.post("/api/login", {
    username: username,
    password: password
  });
}