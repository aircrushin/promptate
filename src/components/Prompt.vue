<template>
    <div>
      <input v-model="prompt" placeholder="Enter your prompt" />
      <button @click="generateText">Generate</button>
      <p>Response: {{ responseText }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import axios from 'axios';
  
  const prompt = ref('');
  const responseText = ref('');
  
  const generateText = async () => {
      try {
          const response = await axios.post('http://localhost:3000/api/generate-text', { prompt: prompt.value });
          responseText.value = response.data.text;
      } catch (error) {
          console.error('Error:', error);
      }
  };
  </script>
  