<template>
  <div class="app">
    <div class="left-container">
      <textarea v-model="text" class="text"/>
    </div>
    <div class="right-container">
      <Navigator @navigate="handleNavigation" />
      <div class="card-container">
        <Card 
          v-for="(card, index) in filteredCards" 
          :key="index" 
          :text="card" 
          @click="addText(card)" 
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';  
import Card from './components/Card.vue';
import PromptWork from './components/PromptWork.vue'
import Navigator from './components/Navigator.vue';

// 使用 ref 来创建响应式数据
const text = ref('');
const cards = ref(['卡片1内容1', '卡片2内容2']); // 卡片内容

// 方法
const addText = (cardText: string) => {
  text.value += cardText;
  console.log(text);
  //console.log(111);
};

const currentNav = ref('内容1'); // 当前选中的导航

const filteredCards = computed(() => {
  // 根据当前选中的导航过滤卡片
  return cards.value.filter(card => card.includes(currentNav.value));
});

const handleNavigation = (navItem: string) => {
  currentNav.value = navItem;
};

</script>

<style>
.app {
  display: flex;
  justify-content: space-between;
}

.left-container {
  width: 20%; /* 或根据需要调整 */
}

.right-container {
  width: 30%; /* 或根据需要调整 */
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  /* 其他样式保持不变 */
}

.text {
  height: 300px;
}
/* 其他组件样式 */
</style>
