<template>
  <PHeader></PHeader>
  <div class="about-page">
    <h1>产品介绍</h1>
    <p>{{ productDescription }}</p>

    <div class="features">
      <h2>产品特性</h2>
      <ul>
        <li v-for="feature in features" :key="feature.id">
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </li>
      </ul>
    </div>
  </div>
  <PFooter></PFooter>
</template>

<script lang="ts" setup>
import PHeader from "../components/PHeader.vue";
import PFooter from "../components/PFooter.vue";
import { ref } from "vue";

interface Feature {
  id: number;
  title: string;
  description: string;
}

const productDescription = ref(
  "这里是您的产品的详细介绍。它可以是一个简短的段落，阐述您的产品如何解决用户问题、它的核心优势等等。"
);

const features = ref<Feature[]>([
  { id: 1, title: "特性 1", description: "关于特性 1 的详细描述。" },
  { id: 2, title: "特性 2", description: "关于特性 2 的详细描述。" },
  // 添加更多特性...
]);
</script>

<style scoped lang="scss">
.about-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

h1,
h2 {
  color: #333;
}

.features ul {
  list-style: none;
  padding: 0;
}

.features li {
  margin-bottom: 15px;
  text-align: left;
}

.features h3 {
  margin-bottom: 5px;
  color: #444;
}

.features p {
  color: #666;
}
</style>
