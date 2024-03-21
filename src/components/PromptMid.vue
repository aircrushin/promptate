<template>
  <div class="action">
    <div class="action-container">
      <!-- title space -->
      <div class="title">
        <h2>👨🏻‍🎤 Midjourney Prompt 生成器 👨🏻‍🎤</h2>
        <p>
          这是一个基于GPT模型训练微调和处理后的Midjourney提示词生成器。📓 只需输入你希望优化的提示语即可 🧙🏻🧑🏻‍🚀🧑🏻‍🎨🧑🏻‍🔬🧑🏻‍💻🧑🏼‍🏫
        </p>
      </div>
      <!-- input space -->
      <div class="main-space">
        <div class="input-container">
          <p style="float: left">输入一段提示词, 例如：一个年轻女孩</p>
          <input v-model="prompt" placeholder="Enter..." />
          <div class="editor">
            <n-button class="btn" @click="prompt = ''">清空</n-button>
            <n-button class="btn" @click="generateText">生成</n-button>
          </div>
        </div>
        <div class="output-container">
          <p class="output-menu">Prompt:
            <span class="copy-container" @click="copy(responseText)" v-if="responseText">
              <CopyIcon />
            </span>
          </p>
          <textarea disabled="true" v-if="!show">{{ responseText }}</textarea>
          <n-spin v-if="show" :delay="1000" style="margin-top: 50px;">
            <span />
          </n-spin>
        </div>
      </div>
    </div>
  </div>
  <div class="example-container">
    <div class="example-main">
      <span style="margin-left: 9vw;">示例:</span>
      <Card v-for="card in exampleCards" :text="card.text" @click="addText(card.text)" :detail="card.text" color="green"
        class="card-container">
      </Card>
    </div>
  </div>
  <!-- <div class="example-container">
    <div class="example-main">
      <img src="https://sfile.chatglm.cn/testpath/2599568c-7616-515b-be08-ff5b36d8740c_0.png" alt="">
    </div>
  </div> -->
</template>

<script setup lang="ts">
import { ref } from "vue";
import { generatePromptMid } from "../api";
import Card from './Card.vue';
import copyToClipboard from '../utils/copy'
import {
  CopyOutline as CopyIcon,
} from "@vicons/ionicons5";

const prompt = ref("");
const responseText = ref("");
const show = ref(false);
//this is just a test to see if the api works
// function testApi() {
//   hello().then(({ data }) => {
//     console.log(data.response);
//   });
// }

function generateText() {
  show.value = true;
  generatePromptMid(prompt.value).then(
    ({ data }) => {
      console.log(data.response);
      show.value = false;
      responseText.value = data.response;
    })
    .catch((err) => {
      show.value = true;
      console.log(err);
    });
}

function copy(item: any) {
  copyToClipboard(item)
}

const exampleCards = [
  {
    button: '1',
    text: '一只独眼狼',
  },
  {
    button: '2',
    text: '一个年轻姑娘',
  },
  {
    button: '3',
    text: '海边的沙滩',
  }
]

const addText = (text: string) => {
  prompt.value = text;
}
</script>

<style scoped>
.action {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5vh;
  height: 30vh;
}

.action-container {
  padding: 0px 20px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: border-color 0.3s, box-shadow 0.3s;
  /* 平滑的过渡效果 */
  width: 80%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

.main-space {
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 20px;
}

.input-container {
  border: 2px solid #eee;
  padding: 20px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.output-container {
  position: relative;
  border: 2px solid #eee;
  padding: 20px;
  width: 90%;
  display: flex;
  flex-direction: column;
}

.output-menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  width: 100%
}

.copy-container {
  float: right;
  cursor: pointer;
  width: 0.875em;
  height: 0.875em
}

.output-container p:first-child {
  position: absolute;
  top: 0;
  left: 20px;
}

.title {
  display: inline;
}

h2 {
  margin-bottom: 10px;
  font-size: 32px;
}

input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 80%;
}

.editor {
  margin-top: 10px;
  display: flex;
  /* 使用flex布局 */
  justify-content: space-between;
  /* 水平居中 */
  gap: 20px;
  /* 按钮之间的间隙 */
}

.btn {
  padding: 10px 20px;
  /* 按钮内边距 */
  border: none;
  /* 移除边框 */
  border-radius: 5px;
  /* 圆角边框 */
  text-transform: uppercase;
  /* 文本转换为大写 */
  font-weight: bold;
  /* 字体加粗 */
  cursor: pointer;
  /* 鼠标悬停时显示指针 */
  transition: background-color 0.3s, transform 0.3s;
  /* 平滑的过渡效果 */
}

textarea {
  font-size: 14px;
  position: relative;
  margin-top: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.example-container {
  margin-top: 12vh;
  width: 90%;
  display: flex;
  justify-content: flex-start;
}


.example-main {
  display: flex;
  /* 启用Flexbox布局 */
  justify-content: center;
  align-items: center;
}

.example-main img {
  max-width: 100px;
  /* 限制图片的最大宽度 */
  max-height: 100px;
  /* 限制图片的最大高度 */
}

span {
  margin-left: 70px;
  color: #888;
}

.card-container {
  width: auto;
  display: inline;
}

@media (max-width: 768px) {
  .main-space {
    grid-template-columns: 1fr; /* 在移动设备上改为单列布局 */
    gap: 10px; /* 减小行间距 */
  }

  .input-container, .output-container {
    width: 100%; /* 宽度调整为100% */
    padding: 10px; /* 减少内边距 */
  }

  .editor, .btn {
    flex-direction: column; /* 将按钮垂直排列 */
    gap: 10px; /* 调整按钮之间的间隙 */
  }

  input, textarea {
    width: 90%; /* 调整输入框和文本区域的宽度 */
  }

  .action-container, .main-space {
    width: 95%; /* 增加容器的宽度，为内容提供更多空间 */
  }

  h2 {
    font-size: 24px; /* 减小标题字体大小 */
  }

  .example-container {
    margin-top: 8vh; /* 调整示例容器的顶部边距 */
    flex-direction: column; /* 在移动设备上垂直排列 */
    align-items: center; /* 居中对齐 */
  }

  .card-container {
    margin: 5px; /* 调整卡片之间的间距 */
  }
}
</style>