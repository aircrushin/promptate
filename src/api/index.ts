import axios from "axios";

export function hello() {
    return axios.get("/api/hello")
}

export function queryAllData() {
  return axios.get("/api/queryAllData")
}

export function generatePrompt(message: string) {
  return axios.post("/api/glmPrompt", {
    "user-content": message
  })
}

export function generatePromptMid(message: string) {
  return axios.post("/api/glmPromptMid", {
    "user-content": message
  })
}

export function optimizePrompt(message: string) {
  return axios.post("/api/glmOptimize", {
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

export function translate(message: string) {
  return axios.post("/api/glmTranslation", {
    "user-content": message
  })
}

export function testPrompt(message: string) {
  return axios.post("/api/glmChat", {
    "user-content": message
  })
}

export function addShareData(title: string, content: string, type: string) {
  const imgSrc = [
      "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
      "https://tse1-mm.cn.bing.net/th/id/OIP-C.Zte3ljd4g6kqrWWyg-8fhAHaEo?w=264&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      "https://tse1-mm.cn.bing.net/th/id/OIP-C.cGc4c8dVlqnfV3uwcS1IogHaE8?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      "https://tse1-mm.cn.bing.net/th/id/OIP-C.Zte3ljd4g6kqrWWyg-8fhAHaEo?w=264&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      "https://tse4-mm.cn.bing.net/th/id/OIP-C.N0USLldg_iKDGVKT12vB4AHaEK?w=292&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      "https://tse1-mm.cn.bing.net/th/id/OIP-C.jzcWzXf_uts2sgE2WChuCQHaEo?w=263&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      "https://tse1-mm.cn.bing.net/th/id/OIP-C.Zte3ljd4g6kqrWWyg-8fhAHaEo?w=264&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  ]
  let src;
switch (type) {
  case "写作辅助":
    src = imgSrc[0];
    break;
  case "IT/编程":
    src = imgSrc[1];
    break;
  case "自助百科":
    src = imgSrc[2];
    break;
  case "教育/学生":
    src = imgSrc[3];
    break;
  case "语言/翻译":
    src = imgSrc[4];
    break;
  case "学术/教师":
    src = imgSrc[5];
    break;
  case "心理/社交":
    src = imgSrc[6];
    break;
  default:
    src = "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
}
return axios.post("/api/shareData", {
  src: src,
  title: title,
  content: content,
  type: type
})
} 