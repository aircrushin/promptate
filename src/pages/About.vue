<template>
  <PHeader></PHeader>
  <div class="about-page">
    <h1>PROMPTATE</h1>

    <div class="features">
      <p>{{ productDescription }}</p>
      <ul>
        <li v-for="feature in features" :key="feature.id" class="feature-item">
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
  "用简单的方式写最好的prompt"
);

const features = ref<Feature[]>([
  { id: 1, title: "框架式编写", description: "根据prompt的格式编写，更加准确" },
  { id: 2, title: "自动生成器", description: "使用AI助手自动生成准确率高的prompt" },
  // 添加更多特性...
]);
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap');

* {
  box-sizing: border-box;
}

body {
  font-family: 'Nunito', sans-serif;
  line-height: 1.6;
}

.about-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

h1 {
  font-family: 'Nunito', sans-serif;
  color: #2c3e50;
  font-size: 2.5em;
}

p {
  margin-bottom: 100px;
  font-style: italic;
}

h2 {
  color: #34495e;
  font-size: 1.8em;
}

.features {
  margin: 10px;
}

.features ul {
  cursor: pointer;
  list-style: none;
  padding: 0;
}

.feature-item {
  margin-bottom: 15px;
  text-align: left;
  border-left: 4px solid #3498db;
  padding-left: 15px;
  transition: all 0.3s ease;
}

.feature-item:hover {
  background-color: #ecf0f1;
  border-left-color: #2ecc71;
}

.features h3 {
  margin-bottom: 5px;
  color: #2980b9;
}

.features p {
  color: #34495e;
}
</style>
