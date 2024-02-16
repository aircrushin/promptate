<template>
  <div class="app">
    <PHeader class="app-menu"></PHeader>
    <div class="app-loading">
      <div class="app-loading-wrap">
        <h2>📖 Promptate 📖</h2>
        <span class="text-large">---- 针对文本和图像生成模型 Prompt 的优化辅助平台</span>
        <img src="/logo2.png" class="app-loading-logo" alt="Logo" />
        <n-button class="app-button" size="large" @click="changeSpin">开始</n-button>
        <div class="scroll-down-wrapper">
          <n-button class="scroll-down-button" size="large" @click="scrollToGallery">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>
          </n-button>
        </div>
        <div class="app-loading-dots">
          <n-spin class="dot dot-spin" v-if="isSpin"></n-spin>
        </div>
      </div>
    </div>
    <PFooter></PFooter>
  </div>
  <div class="app-gallery">
    <h1 class="gallery-title">辅助生成案例</h1>
    <div class="gallery-item">
      <span class="gallery-description">“Immerse yourself in the vastness of the ocean, where the deep blue waters stretch as far as the eye can see.”</span>
      <img src="/gallery1.png" alt="" class="gallery-image">
    </div>
    <div class="gallery-item">
      <span class="gallery-description">A giant mountain under the sky</span>
      <img src="https://source.unsplash.com/random/300x300?sig=1" alt="A giant mountain under the sky" class="gallery-image">
    </div>
    <div class="gallery-item">
      <span class="gallery-description">A giant mountain under the sky</span>
      <img src="https://source.unsplash.com/random/300x300?sig=1" alt="A giant mountain under the sky" class="gallery-image">
    </div>
    <div class="gallery-item">
      <span class="gallery-description">A giant mountain under the sky</span>
      <img src="https://source.unsplash.com/random/300x300?sig=1" alt="A giant mountain under the sky" class="gallery-image">
    </div>
    <div class="gallery-item">
      <span class="gallery-description">A giant mountain under the sky</span>
      <img src="https://source.unsplash.com/random/300x300?sig=1" alt="A giant mountain under the sky" class="gallery-image">
    </div>
    <div class="gallery-item">
      <span class="gallery-description">A giant mountain under the sky</span>
      <img src="https://source.unsplash.com/random/300x300?sig=1" alt="A giant mountain under the sky" class="gallery-image">
    </div>
    <div class="gallery-item">
      <span class="gallery-description">A giant mountain under the sky</span>
      <img src="https://source.unsplash.com/random/300x300?sig=1" alt="A giant mountain under the sky" class="gallery-image">
    </div>
    <div class="gallery-item">
      <span class="gallery-description">A giant mountain under the sky</span>
      <img src="https://source.unsplash.com/random/300x300?sig=1" alt="A giant mountain under the sky" class="gallery-image">
    </div>
    <div class="gallery-item">
      <span class="gallery-description">A giant mountain under the sky</span>
      <img src="https://source.unsplash.com/random/300x300?sig=1" alt="A giant mountain under the sky" class="gallery-image">
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import PFooter from '../components/PFooter.vue'
import PHeader from '../components/PHeader.vue';

const isSpin = ref(false);
const router = useRouter();
const changeSpin = () => {
  isSpin.value = !isSpin.value;
  setTimeout(() => {
    router.push('/main')
  }, 1500);
}

const scrollToGallery = () => {
  const gallery = document.querySelector('.app-gallery');
  if (gallery) {
    gallery.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style lang="scss" scoped>
.app {
  overflow-y: scroll; 
  height: 100vh; 
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer and Edge */
}
.app::-webkit-scrollbar {
  display: none;
}

.app-menu {
  margin-bottom: 100px;
}

.app-button {
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
  background-color: #37b24d;
  transform-origin: center;
  transition: ease-in-out 1.5s;
}

.app-button:hover::before {
  transform: translate3d(-50%, -50%, 0) scale(15, 15);
}

.app-loading {
  display: flex;
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

h2 {
  margin-top: 14vh;
  font-size: 1.875rem;
  opacity: 0.9;
}
.text-large {
  font-size: 1.1rem; /* Equivalent to text-3xl */
  line-height: 1.4;
  opacity: 0.8;
}

.app-loading .app-loading-logo {
  display: flex;
  width: 40vh;
  height: 40vh;
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

.app-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 50px;
  gap: 50px; /* 可以根据需要调整间隙 */
}

.gallery-title {
  width: 100%;
  font-size: 2rem; /* 根据需要调整大小 */
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px; /* 根据需要调整底部边距 */
  color: #333; /* 根据需要调整颜色 */
}


.gallery-item {
  width: calc(33.333% - 50px); /* 减去gap值，确保总宽度不超过100% */
  display: flex;
  align-items: center;
  background-color: #f5f5f5; /* 背景颜色，可以根据需要调整 */
  border-radius: 10px;
  overflow: hidden; /* 确保内部的阴影效果不会超出边界 */
  margin-bottom: 20px; /* 可以根据需要调整 */
}

.gallery-description {
  padding: 20px; /* 内边距，可以根据需要调整 */
  font-size: 1rem; /* 描述文字的大小 */
  line-height: 1.4; /* 描述文字的行高 */
  color: #333; /* 描述文字颜色 */
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.gallery-image {
  width: 500px;
  height: 500px; /* 保持图片的宽高比 */
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

/* 响应式设计，如果屏幕尺寸较小，则调整为每行一个 */
@media (max-width: 1024px) {
  .gallery-item {
    width: 100%; /* 占据容器的全部宽度 */
  }
}

/* 对于更小的屏幕，可以进一步调整 */
@media (max-width: 768px) {
  .gallery-item {
    flex-direction: column;
  }
  .gallery-description,
  .gallery-image {
    width: 100%;
  }
  .gallery-description {
    border-radius: 10px 10px 0 0;
  }
  .gallery-image {
    border-radius: 0 0 10px 10px;
  }
}

.scroll-down-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px; /* 根据需要调整 */
}

.scroll-down-button {
  margin-top: 20px;
  background-color: white; /* 根据需要调整颜色 */
  color: #333;
  border: none;
  border-radius: 50%; /* 使按钮呈圆形 */
  width: 50px; /* 根据需要调整大小 */
  height: 50px; /* 根据需要调整大小 */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease; /* 添加一些过渡效果 */
}

.scroll-down-button:hover {
  transform: translateY(5px); /* 鼠标悬停时的效果 */
}

.scroll-down-button:focus {
  outline: none; /* 移除焦点时的默认边框 */
}

/* SVG图标样式 */
.scroll-down-button svg {
  width: 24px; /* 根据需要调整大小 */
  height: 24px; /* 根据需要调整大小 */
}

</style>