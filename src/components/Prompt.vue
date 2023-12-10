<template>
  <div>
    <input v-model="prompt" placeholder="Enter your prompt" />
    <button @click="generateText">Generate</button>
    <p>BetterPrompt: {{ responseText }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import { chat } from "../api/model";
const prompt = ref("");
const responseText = ref("");
const messages = [{ role: "system", content: "You are a helpful assistant." }]

const generateText = async () => {
  try {
    console.log("start");
    const response = await chat(messages);
    console.log(response.json());
    responseText.value = response as unknown as string;
    //const data = await response.json();
    console.log(response.json());
  } catch (error) {
    console.error("Error:", error);
  }
};
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
