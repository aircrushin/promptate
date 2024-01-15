<template>
  <div class="app">
    <Menu class="app-menu"></Menu>
    <div class="app-loading">
      <div class="app-loading-wrap">
        <img src="/logo2.png" class="app-loading-logo" alt="Logo" />
        <n-button class="app-button" size="large" @click="changeSpin">开始</n-button>
        <div class="app-loading-dots">
          <n-spin class="dot dot-spin" v-if="isSpin"></n-spin>
        </div>
      </div>
    </div>
    <PFooter></PFooter>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import PFooter from '../components/PFooter.vue'
import Menu from '../components/Menu.vue'

const isSpin = ref(false);
const router = useRouter();
const changeSpin = () => {
  isSpin.value = !isSpin.value;
  setTimeout(() => {
    router.push('/main')
  }, 1500);
}
</script>

<style lang="scss" scoped>
.app-button {
  width: 200px;
  height: 50px;
  color: #000;
  position: relative;
  z-index: 1;
  overflow: hidden;
  border-radius: 5px;
}

.app-button::before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  width: 1rem;
  height: 1rem;
  transform: translate3d(-50%, -50%, 0) scale(0, 0);
  border-radius: 50%;
  background-color: #37b24d;
  transform-origin: center;
  transition: ease-in-out 1.5s;
}

.app-button:hover::before {
  transform: translate3d(-50%, -50%, 0) scale(15, 15);
}

.app-loading {
  background-image: url('../utils/cover.jpg');
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.app-loading .app-loading-wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  transform: translate3d(-50%, -50%, 0);
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.app-loading-dots {
  display: flex;
  padding: 98px;
  justify-content: center;
  align-items: center;
}

.app-loading .app-loading-title {
  display: flex;
  margin-bottom: 30px;
  font-size: 30px;
  color: rgb(0 0 0 / 85%);
  justify-content: center;
  align-items: center;
}

.app-loading .app-loading-logo {
  display: block;
  width: 50vh;
  height: 50vh;
  margin: 0 auto;
}

.dot {
  position: absolute;
  /* 将position设置为absolute */
  display: inline-block;
  width: 48px;
  height: 48px;
  margin-top: 30px;
  font-size: 32px;
  transform: rotate(45deg);
  box-sizing: border-box;
  animation: antRotate 1.2s infinite linear;
}
</style>