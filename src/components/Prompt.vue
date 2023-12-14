<template>
  <div class="action">
    <div class="action-container">
      <div class="title">
        <h3>Prompt生成器</h3>
        <!-- <Help class="help"></Help> -->
      </div>
      <input v-model="prompt" placeholder="Enter your action" />
      <div class="editor">
          <n-button class="btn" @click="prompt = ''">清空</n-button>
          <n-button class="btn" @click="generateText">生成</n-button>
      </div>
      <textarea placeholder="" spellcheck="false" disabled="true"
        >{{ responseText }}
    </textarea>
    <div class="editor">
      <n-message-provider>
      </n-message-provider>
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { generatePrompt, hello } from "../api";
import Help from "./Help.vue";
import copyToClipboard from "../utils/copy"

const prompt = ref("");
const responseText = ref("");
//this is just a test to see if the api works
function testApi() {
  hello().then(({ data }) => {
    console.log(data.response);
  });
}

function generateText() {
  generatePrompt(prompt.value)
    .then(({ data }) => {
      console.log(data.response);
      responseText.value = data.response;
    })
    .catch((err) => {
      console.log(err);
    });
}
</script>

<style scoped>
.action {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.action-container {
  padding: 0px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border: 1px solid #ccc; /* 灰色边框 */
  border-radius: 5px; /* 圆角边框 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 轻微的阴影效果 */
  transition: border-color 0.3s, box-shadow 0.3s; /* 平滑的过渡效果 */
  width: 100%;
}

.title {
  display: inline;
}

h2 {
  margin-bottom: 10px;
}

.help {
  text-align: center;
  justify-content: center;
}

input {
  margin-left: 10px;
  padding: 6px;
  border: 2px solid #ddd;
  border-radius: 4px;
  width: 100%;
  margin-right: 10px;
}

.editor {
  margin-top: 10px;
  display: flex; /* 使用flex布局 */
  justify-content: space-between; /* 水平居中 */
  gap: 20px; /* 按钮之间的间隙 */
}

.btn {
  padding: 10px 20px; /* 按钮内边距 */
  border: none; /* 移除边框 */
  border-radius: 5px; /* 圆角边框 */
  text-transform: uppercase; /* 文本转换为大写 */
  font-weight: bold; /* 字体加粗 */
  cursor: pointer; /* 鼠标悬停时显示指针 */
  transition: background-color 0.3s, transform 0.3s; /* 平滑的过渡效果 */
}

textarea {
  margin-top: 10px;
  border: 1px solid #ddd;
  border-radius: 5px; /* 圆角边框 */
  outline: none; /* 去除默认轮廓 */
  resize: none; /* 禁止调整大小 */
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 轻微的阴影效果 */
  transition: border-color 0.3s, box-shadow 0.3s; /* 平滑的过渡效果 */
  overflow: scroll;
}
</style>
