<template>
  <div class="action">
    <div class="action-container">
      <!-- title space -->
      <div class="title">
        <h2>👨🏻‍🎤 ChatGPT Prompt 生成器 👨🏻‍🎤</h2>
        <p>
          This app generates ChatGPT prompts, it’s based on a BART model trained
          on this dataset. 📓 Simply enter a persona that you want the prompt to
          be generated based on. 🧙🏻🧑🏻‍🚀🧑🏻‍🎨🧑🏻‍🔬🧑🏻‍💻🧑🏼‍🏫
        </p>
      </div>
      <!-- input space -->
      <div class="main-space">
        <div class="input-container">
          <p style="float: left">输入一个角色, 例如：photographer</p>
          <input v-model="prompt" placeholder="Enter..." />
          <div class="editor">
            <n-button class="btn" @click="prompt = ''">清空</n-button>
            <n-button class="btn" @click="generateText">生成</n-button>
          </div>
        </div>
        <div class="output-container">
          <p>Prompt:</p>
          <textarea disabled="true" v-if="!show">{{ responseText }}</textarea>
          <n-spin v-if="show" :delay="1000" style="margin-top: 50px;">
            <span/>
          </n-spin>
        </div>
      </div>
    </div>
  </div>
  <div class="example-container">
    <div class="main">
      <span>Example:</span> 
      <Card v-for="card in exampleCards" :text="card.text" @click="addText(card.text)" :detail="card.text"
          class="card-container">
      </Card>
  </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { generatePrompt, hello } from "../api";
import Card from './Card.vue';

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
  generatePrompt(prompt.value).then(
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

const exampleCards = [
    {
    button: '1',
    text: 'Novelist',
    }, 
    {
    button: '2',
    text: 'Travel Guide',
    },
    {
    button: '3',
    text: 'Linux',
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
  margin-top: 20px;
}

.action-container {
  padding: 0px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: border-color 0.3s, box-shadow 0.3s; /* 平滑的过渡效果 */
  width: 90%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

.main-space {
  width: 90%;
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
  position: relative;
  margin-top: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-family: 'Roboto', sans-serif; /* or font-family: 'Open Sans', sans-serif; */
}

.example-container {
  margin-top: 5vh;
  width: 80%;
  display: flex;  
  justify-content: flex-start;
}

.main {
  display: flex; /* 启用Flexbox布局 */
  justify-content: space-between; /* 子元素之间有空间 */
}

span {
  margin-left: 70px;
  color: #888;
}

.card-container {
  display: inline;
}
</style>
