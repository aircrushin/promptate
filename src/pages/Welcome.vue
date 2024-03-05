<template>
  <div class="app">
    <PHeader class="app-menu"></PHeader>
    <div class="app-loading">
      <div class="app-loading-wrap">
        <h2 v-if="!isMobile">📖 Promptate 📖</h2>
        <span class="text-large" v-if="!isMobile">---- 针对文本和图像生成模型 Prompt 的优化辅助平台</span>
        <img src="/logo2.png" class="app-loading-logo" alt="Logo" />
        <n-button class="app-button" size="large" @click="changeSpin">开始</n-button>
        <div class="scroll-down-wrapper" v-if="!isMobile">
          <n-button class="scroll-down-button" size="large" @click="scrollToGallery">
            <!-- SVG arrow -->
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down"
            viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
          </svg>
          </n-button>
        </div>
        <div class="app-loading-dots" v-if="!isMobile">
          <n-spin class="dot dot-spin" v-if="isSpin"></n-spin>
        </div>
      </div>
    </div>
  </div>
  <div class="app-gallery">
    <h1 class="gallery-title">辅助生成案例 -- 图片</h1>
    <div class="gallery-item" v-for="(item, index) in galleryItems" :key="index">
      <span class="gallery-description">{{ item.description }}</span>
      <img :src="item.imageSrc" alt="" class="gallery-image">
    </div>
    <h1 class="gallery-title">More To Come...</h1>
  </div>
  <PFooter></PFooter>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted  } from 'vue';
import { useRouter } from 'vue-router'
import PFooter from '../components/PFooter.vue'
import PHeader from '../components/PHeader.vue';

const isMobile = ref(false);

const checkScreenSize = () => {
  isMobile.value = window.innerHeight < 600;
};

onMounted(() => {
  window.addEventListener('resize', checkScreenSize);
  checkScreenSize();
});

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize);
});
const isSpin = ref(false);
const router = useRouter();
const changeSpin = () => {
  isSpin.value = !isSpin.value;
  setTimeout(() => {
    router.push('/main')
  }, 1500);
}

const galleryItems = ref([
  {
    description: "Immerse yourself in the vastness of the ocean, where the deep blue waters stretch as far as the eye can see. Discovering wonders beyond your wildest dreams.",
    imageSrc: "/gallery1.png",
  },
  {
    description: "Autumn forest, colorful leaves, serene path, wooden bench, crisp air, falling leaves, golden sunlight, peaceful nature, hidden mushrooms, gentle stream.",
    imageSrc: "/gallery2.png",
  },
  {
    description: "Portray a beautiful girl in a modern setting, The girl should have clear facial features and a serene expression. The style should be ultra high definition, with sharp lines and realistic detailing.",
    imageSrc: "/gallery3.png",
  },
  {
    description: "Portray a wonderland, maple trees, woodsy scent, acorn scattered ground, hiking trail, quiet ambiance, squirrel activity, gentle breeze, autumnal landscape.",
    imageSrc: "/gallery4.png",
  },
  {
    description: "Picture a Chinese man in his 40s, stylish outfit, confident pose, striking eyes, well-groomed hair, muscular build, fashionable accessories, charismatic personality, handsome features.",
    imageSrc: "/gallery5.png",
  },
  {
    description: "Towering peaks, cascading waterfalls, misty mountains, serene streams, ancient pine trees, tranquil ambiance, traditional Chinese landscape, harmonious nature.",
    imageSrc: "/gallery6.png",
  }
]);

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
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.app::-webkit-scrollbar {
  display: none;
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
  background: linear-gradient(to bottom, #f5f5f5, #e8e8e8);
}

.app-loading .app-loading-wrap {
  margin-top: 20vh;
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
  font-size: 1.875rem;
  opacity: 0.9;
}

.text-large {
  font-size: 1.1rem;
  line-height: 1.4;
  opacity: 0.8;
}

h2,
.text-large {
  color: #333;
}

.app-loading .app-loading-logo {
  margin-top: 5vh;
  display: flex;
  width: 40vh;
  height: 40vh;
  margin: 0 auto;
}

.dot {
  position: absolute;
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
  gap: 50px;
}

.gallery-title {
  width: 100%;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  color: #444;
}


.gallery-item {
  width: calc(50% - 50px);
  background: linear-gradient(to right, #f5f5f5, #e8e8e8);
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
}

.gallery-description {
  width: 40%;
  padding: 20px;
  font-size: 1rem;
  line-height: 1.4;
  color: #333;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 20;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.gallery-image {
  width: 400px;
  height: 400px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

@media (max-width: 1024px) {
  .gallery-item {
    width: 50%;
  }
}

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
  margin-top: 20px;
}

.scroll-down-button {
  margin-top: 20px;
  background-color: white;
  color: #333;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.scroll-down-button:hover {
  transform: translateY(5px);
}

.scroll-down-button:focus {
  outline: none;
}

.scroll-down-button svg {
  width: 24px;
  height: 24px;
}

@keyframes color-change {
  0% {
    border-color: #37b24d;
  }

  50% {
    border-color: #f5b24d;
  }

  100% {
    border-color: #37b24d;
  }
}</style>