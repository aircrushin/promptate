<template>
  <div>
    <input v-model="prompt" placeholder="Enter your prompt" />
    <button @click="generateText">Generate</button>
    <p>{{ responseText }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { generatePrompt,hello } from "../api"

const prompt = ref("");
const responseText = ref("");

function testApi() {
  hello().then(({
    data
  }) => {
    console.log(data.response);
  })
}

function generateText() {
  generatePrompt(prompt.value).then(({
    data
  }) => {
    console.log(data.response);
    responseText.value = data.response;
  }).catch((err) =>{
    console.log(err);
  })
}
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

input {
  margin-top: 20px;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid #ddd;
  border-radius: 4px;
  width: 100%;
}

button {
  padding: 10px 20px;
  width: 100px;
  border: none;
  background-color: #4CAF50;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #45a049;
}

p {
  margin-top: 20px;
  color: #333;
  font-size: 14px;
}
</style>
