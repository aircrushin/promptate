import { DataType, PDataType } from "./DataType";

interface backgroundType {
  type: string;
  data: PDataType[];
}

export const background: backgroundType = {
  type: "质量",
  data: [
    {
      keyWord: "超高清",
      type: "质量",
      detail: "UHD,",
      useTime: 22,
      color: "yellow",
    },
    {
      keyWord: "解刨学正确",
      type: "质量",
      detail: "anatomically correct,",
      useTime: 22,
      color: "yellow",
    },
    {
      keyWord: "准确",
      type: "质量",
      detail: "accurate,",
      useTime: 22,
      color: "yellow",
    },
    {
        keyWord: "质感皮肤",
        type: "质量",
        detail: "textured skin,",
        useTime: 22,
        color: "yellow",
      },
  ],
};
