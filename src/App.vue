<template>
  <n-message-provider>
    <MessageApi />
  </n-message-provider>
  <PHeader></PHeader>
  <div class="app">
    <div class="left-container">
      <PromptWork :modelValue="text" :title="title" @update:modelValue="handleUpdateModelValue" @update:title="handleUpdateTitle"></PromptWork>
      <Prompt></Prompt>
    </div>
    <div class="right-container">
      <Navigator @navigate="handleNavigation" :buttonLabels="categoryNames" />
      <div class="card-container">
        <!-- <PTransfer v-show="activeButton === myFav"></PTransfer> -->
        <Action v-if="activeButton === '行动任务'"></Action> <!-- 添加这一行 -->
        <Card v-for="card in filteredCardItems" :key="card.button" :text="card.text" :detail="card.detail" v-show="activeButton === card.button"
          @click="addText(card.detail)">
        </Card>
      </div>
    </div>
  </div>
  <PFooter></PFooter>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import Card from './components/Card.vue';
import Navigator from './components/Navigator.vue';
import PromptWork from './components/PromptWork.vue';
import PHeader from './components/PHeader.vue';
import { data, background } from './data/data'
import PFooter from './components/PFooter.vue';
import Action from './components/Action.vue';
import MessageApi from './components/message-api.vue';
import Prompt from './components/Prompt.vue'

const text = ref('');
const title = ref('');
const myFav:string = "收藏"
const categoryNames = computed(() => data.categories!.map((category) => category.name));

interface cardItemsType {
  button: string;
  text: string | undefined;
  detail: string | undefined;
  color: string | undefined;
}

const cardItems: cardItemsType[] = background.data.map((item, index) => ({
  button: item.type,
  text: item.keyWord,
  detail: item.detail,
  color: item.color
}));

const activeButton = ref('');

// 方法
const handleNavigation = (button: string) => {
  activeButton.value = button;
};

// 创建过滤后的 cardItems 计算属性
const filteredCardItems = computed(() => {
  if (!activeButton.value) {
    return;
  }
  return cardItems.filter(card => card.button === activeButton.value);
});

//实现addText函数
const addText = (cardText?: string) => {
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
  width: 40%;
  /* 或根据需要调整 */
}

.card-container {
  width: 100%;
  display: flex;  
  flex-wrap: wrap;

  /* 其他样式保持不变 */
}

.text {
  height: 300px;
}
</style>
