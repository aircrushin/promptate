<template>
  <div class="app">
    <div class="left-container">
      <textarea v-model="text" class="text" />
    </div>
    <div class="right-container"> 
      <Navigator @navigate="handleNavigation" :buttonLabels="categoryNames"/>
      <div class="card-container">
        <Card v-for="card in cardItems" :key="card.button" :text="card.text" v-show="activeButton === card.button" @click="addText(card.detail)"></Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed  } from 'vue';
import Card from './components/Card.vue';
import Navigator from './components/Navigator.vue';
import { data } from './data/data'
//console.log(data.categories)
// 使用 ref 来创建响应式数据
const text = ref('');
const categoryNames = computed(() => data.categories!.map((category) => category.name));
console.log(categoryNames)
interface cardItemsType {
  button: string | undefined;
  text: string;
  detail: string;
}
const cardItems: cardItemsType[] = [
  { button: categoryNames.value[0], text: '我在哪', detail:'我在{文本}'},
  { button: categoryNames.value[1], text: '自定义内容2', detail:'我在{文本}'},
  // ... 更多内容
];
const activeButton = ref('');


// 方法
const handleNavigation = (button: string) => {
  activeButton.value = button;
};

const addText = (cardText: string) => {
  text.value += cardText;
  console.log(text);
  //console.log(111);
};


</script>

<style>
.app {
  display: flex;
  justify-content: space-between;
}

.left-container {
  width: 20%;
  /* 或根据需要调整 */
}

.right-container {
  width: 30%;
  /* 或根据需要调整 */
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  /* 其他样式保持不变 */
}

.text {
  height: 300px;
}
</style>
