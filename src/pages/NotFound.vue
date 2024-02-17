<template>
    <div class="not-found-container">
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <router-link to="/">Go back home</router-link>
      <PFooter></PFooter>
    </div>
  </template>
  
  <script lang="ts" setup>;
  import PHeader from '../components/PHeader.vue';
  import PFooter from '../components/PFooter.vue';
  </script>
  
  <style scoped>
  .not-found-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  
  .not-found-container h1 {
    font-size: 5rem;
    margin-bottom: 1rem;
  }
  
  .not-found-container p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  </style>
  