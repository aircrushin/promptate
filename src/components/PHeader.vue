<template>
  <!-- <n-page-header subtitle="PROMPTATE" class="header">
    <a href="https://github.com/your-github-username">GitHub</a>
  </n-page-header> -->
  <div class="IndexPage">
    <nav>
      <!-- <n-breadcrumb class="doc">
        <n-breadcrumb-item href="https://gitee.com/ultrav/promptate">GitHub</n-breadcrumb-item>
        <n-breadcrumb-item @click="goToGenerator">生成器</n-breadcrumb-item>
      </n-breadcrumb> -->
      <Menu />
      <div class="right-bar">
        <a class="logo" href="https://gitee.com/ultrav/promptate"
        ><b>PROMPTATE</b>/FYH</a
      >
      <Modal></Modal>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import Menu from '../components/Menu.vue'
import Modal from '../components/Modal.vue'

const router = useRouter();

</script>

<style scoped lang="scss">
.IndexPage {
  > nav {
    font-size: 14px;
    display: flex;
    place-items: center;
    padding-top: 20px;
    padding-bottom: 10px;
    padding-left: 23px;
    padding-right: 14px;
    .logo {
      font-family: "JetBrains Mono";
      color: #9f9f9f;
      text-shadow: 0 1px 1px #ffffff;
      place-items: center;
      font-weight: 200;
      display: flex;
      place-content: flex-start;
      text-decoration: none;
    }
    .doc {
      cursor: pointer;
      float: right;
      margin-left: 80%;
      font-family: "JetBrains Mono";
      color: #222;
      text-shadow: 0 1px 1px #ffffff;
      place-items: center;
      flex-direction: row;
      font-weight: 200;
      display: flex;
      place-content: flex-start;
      text-decoration: none;
    }
  }
}

.right-bar {
  display: flex;
}
</style>
