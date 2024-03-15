<template>
    <div class="homepage">
        <PHeader></PHeader>
        <div>
            <h1 class="title">📖 Promptate 📖</h1>
            <p class="description" ref="typewriter">-</p>
            <img src="/logo2.png" class="app-loading-logo" alt="Logo" />
            <n-button class="app-button" size="large" @click="changeSpin">开始</n-button>
        </div>
        <PFooter></PFooter>
    </div>
</template>

<script setup lang="ts">
import { onMounted,ref } from 'vue';
import { useRouter } from 'vue-router';
import Typed from 'typed.js';
import PFooter from '../components/PFooter.vue'
import PHeader from '../components/PHeader.vue';

const isSpin = ref(false);
const typewriter = ref(null);
const router = useRouter();
const changeSpin = () => {
  isSpin.value = !isSpin.value;
  setTimeout(() => {
    router.push('/main')
  }, 1500);
}

onMounted(() => {
    const title = document.querySelector('.title');
    title!.classList.add('animate');
    new Typed(typewriter.value, {
    strings: ["--- 针对文本和图像生成模型 Prompt 的优化辅助平台"],
    typeSpeed: 50,
    showCursor: false,

  });
});
</script>

<style scoped>
html,
body {
    height: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
}

.homepage {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    /* 使用视口高度来确保至少与屏幕同高 */
    background-size: cover;
    /* 背景图占满整个元素的背景区域 */
    background-position: center;
    /* 背景图居中显示 */
    background-image: url('/bgImg.webp');
    /* 替换为你的背景图片URL */
    text-align: center;
    color: black;
}

.title {
    color: #444;
    margin-top: 12vh;
    font-size: 36px;
    opacity: 0.5;
    transform: translateY(-20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.title.animate {
    opacity: 1;
    transform: translateY(0);
}

.description {
    font-size: 20px;
    margin-top: 20px;
    font-weight: 200;
    letter-spacing: 1px;
}

.app-loading-logo {
    margin-top: 5vh;
    display: flex;
    width: 40vh;
    height: 40vh;
    margin: 0 auto;
}

.app-button {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
    width: 180px;
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
    background-color: aliceblue;
    transform-origin: center;
    transition: ease-in-out 1.5s;
}

.app-button:hover::before {
    transform: translate3d(-50%, -50%, 0) scale(15, 15);
}
</style>