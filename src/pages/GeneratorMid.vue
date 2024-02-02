<template>
    <div class="main-generator">
      <n-loading-bar-provider>
        <loadingBar />
      </n-loading-bar-provider>
      <PHeader></PHeader>
      <n-icon class="icon">
        <IosArrowRoundBack size="500px" @click="handleBack"/>
      </n-icon>
      <Prompt></Prompt>
      <PFooter></PFooter>
    </div>
  </template>
  
  <script setup lang="ts">
  import Prompt from '../components/PromptMid.vue';
  import PHeader from '../components/PHeader.vue';
  import PFooter from '../components/PFooter.vue';
  import loadingBar from '../components/loadingBar-api.vue';
  import { IosArrowRoundBack } from '@vicons/ionicons4';
  import { useRouter } from 'vue-router'
  
  const router = useRouter();
  function handleBack() {
    router.push('/main')
  }
  </script>
  
  <style scoped>
  .main-generator {
    display: flex;
    flex-direction: column;
  }
  
  .icon {
    margin-bottom: 5vh;
    margin-left: 0;
    padding-left: 20px;
    font-size: 32px;
    cursor: pointer;
  }
  </style>
  