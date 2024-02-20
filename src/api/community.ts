import axios from "axios";

const imgSrc = [
  "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
  "https://tse1-mm.cn.bing.net/th/id/OIP-C.Zte3ljd4g6kqrWWyg-8fhAHaEo?w=264&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  "https://tse1-mm.cn.bing.net/th/id/OIP-C.cGc4c8dVlqnfV3uwcS1IogHaE8?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  "https://tse1-mm.cn.bing.net/th/id/OIP-C.Zte3ljd4g6kqrWWyg-8fhAHaEo?w=264&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  "https://tse4-mm.cn.bing.net/th/id/OIP-C.N0USLldg_iKDGVKT12vB4AHaEK?w=292&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  "https://tse1-mm.cn.bing.net/th/id/OIP-C.jzcWzXf_uts2sgE2WChuCQHaEo?w=263&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  "https://tse1-mm.cn.bing.net/th/id/OIP-C.Zte3ljd4g6kqrWWyg-8fhAHaEo?w=264&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
];

function getImageSrcByType(type: string) {
  switch (type) {
    case "写作辅助":
      return imgSrc[0];
    case "IT/编程":
      return imgSrc[1];
    case "自助百科":
      return imgSrc[2];
    case "教育/学生":
      return imgSrc[3];
    case "语言/翻译":
      return imgSrc[4];
    case "学术/教师":
      return imgSrc[5];
    case "心理/社交":
      return imgSrc[6];
    default:
      return "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg";
  }
}

// 查询
export function queryCommunityData() {
  return axios.get("/api/communityData");
}

// 增加
export function addCommunityData(title: string, content: string, type: string) {
  const src = getImageSrcByType(type);
  return axios.post("/api/communityData", {
    src: src,
    title: title,
    content: content,
    type: type,
  });
}

// 删除
export function deleteCommunityData(id: number) {
  return axios.delete(`/api/communityData/${id}`);
}

// 修改
export function modifyCommunityData(
  id: number,
  title: string,
  content: string,
  type: string
) {
  const src = getImageSrcByType(type);
  return axios.post(`/api/communityData/${id}`, {
    src,
    title,
    content,
    type,
  });
}
