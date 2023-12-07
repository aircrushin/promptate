<template>
  <div class="app">
    <div class="left-container">
      <PromptWork :modelValue="text" :title="title" @update:modelValue="handleUpdateModelValue" @update:title="handleUpdateTitle"></PromptWork>
    </div>
    <div class="right-container">
      <Navigator @navigate="handleNavigation" :buttonLabels="categoryNames" />
      <div class="card-container">
        <Card v-for="card in cardItems" :key="card.button" :text="card.text" v-show="activeButton === card.button"
          @click="addText(card.detail)">
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import Card from './components/Card.vue';
import Navigator from './components/Navigator.vue';
import PromptWork from './components/PromptWork.vue';
import { data } from './data/data'

const text = ref('');
const title = ref('');
const categoryNames = computed(() => data.categories!.map((category) => category.name));

interface cardItemsType {
  button: string | undefined;
  text: string;
  detail: string;
}
const cardItems: cardItemsType[] = [
  { button: categoryNames.value[0], text: '我在哪', detail: '我在{文本}' },
  { button: categoryNames.value[1], text: '自定义内容2', detail: '我在{文本}' },
  // ... 更多内容
];
const activeButton = ref('');


// 方法
const handleNavigation = (button: string) => {
  activeButton.value = button;
};

//实现addText函数
const addText = (cardText: string) => {
  text.value += cardText;
  console.log(text.value);
};

//实现 handleUpdateModelValue 方法
const handleUpdateModelValue = (value: string) => {
  text.value = value;
};

const handleUpdateTitle = (value: string) => {
  title.value = value;
};

</script>

<style>
.app {
  display: flex;
  justify-content: space-around;
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
