<template>
    <div class="app">
      <Menu class="app-menu"></Menu>
      <div class="app-loading">
          <div class="app-loading-wrap">
            <img src="/logo.png" class="app-loading-logo" alt="Logo" />
            <n-button class="app-button" size="large" color="#a5d8ff" @click="changeSpin">开始</n-button>
            <div class="app-loading-dots">
              <span class="dot dot-spin" v-if="isSpin"><i></i><i></i><i></i><i></i></span>
            </div>
          </div>
        </div>
        <PFooter></PFooter>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import PFooter from '../components/PFooter.vue';
import Menu from '../components/Menu.vue'

const isSpin = ref(false);
const router = useRouter();
const changeSpin = () => {
    isSpin.value = !isSpin.value;
    setTimeout(() => {
        router.push('/main') 
    }, 1000);
}
</script>

<style lang="scss" scoped>

.app-button {
    width: 100px;
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
    transform: translate3d(-50%,-50%,0) scale(0,0);
    border-radius: 50%;
    background-color: #1c7ed6;
    transform-origin: center;
    transition: ease-in-out 1.5s;
}

.app-button:hover::before {
    transform: translate3d(-50%,-50%,0) scale(15,15);
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

  .app-loading .dots {
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
    position: relative;
    display: inline-block;
    width: 48px;
    height: 48px;
    margin-top: 30px;
    font-size: 32px;
    transform: rotate(45deg);
    box-sizing: border-box;
    animation: antRotate 1.2s infinite linear;
  }

  .dot i {
    position: absolute;
    display: block;
    width: 20px;
    height: 20px;
    background-color: #0065cc;
    border-radius: 100%;
    opacity: 30%;
    transform: scale(0.75);
    animation: antSpinMove 1s infinite linear alternate;
    transform-origin: 50% 50%;
  }

  .dot i:nth-child(1) {
    top: 0;
    left: 0;
  }

  .dot i:nth-child(2) {
    top: 0;
    right: 0;
    animation-delay: 0.4s;
  }

  .dot i:nth-child(3) {
    right: 0;
    bottom: 0;
    animation-delay: 0.8s;
  }

  .dot i:nth-child(4) {
    bottom: 0;
    left: 0;
    animation-delay: 1.2s;
  }
  @keyframes antRotate {
    to {
      transform: rotate(405deg);
    }
  }
  @keyframes antRotate {
    to {
      transform: rotate(405deg);
    }
  }
  @keyframes antSpinMove {
    to {
      opacity: 100%;
    }
  }
  @keyframes antSpinMove {
    to {
      opacity: 100%;
    }
  }
</style>