<template>
  <n-message-provider>
    <MessageApi />
  </n-message-provider>
  <PHeader></PHeader>
  <div class="app">
    <div class="left-container">
      <PromptWork :modelValue="text" :title="title" :isGPT="isGPT" @update:modelValue="handleUpdateModelValue"
        @update:title="handleUpdateTitle"></PromptWork>
      <!-- <CardEditor/> -->
    </div>
    <div class="right-container">
      <Dropdown @update:key="updateKey"></Dropdown>
      <!-- <Tabs></Tabs> -->
      <Navigator @navigate="handleNavigation" :buttonLabels="navigatorLabels.map((label) => label.name)" />
      <div class="card-container">
        <Action v-if="activeButton === '行动任务'" @addText="handleAction"></Action>
        <Card v-for="card in filteredCardItems" :key="card.button" :text="card.text" :detail="card.detail"
          :color="card.color" v-show="activeButton === card.button" @click="addText(card.detail)"
          @add-tag="addTagToTagsRef" @add-detail="addDetailToTagsRef">
        </Card>
      </div>
    </div>
  </div>
  <PFooter></PFooter>
</template>
   
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import Card from '../components/Card.vue';
import Navigator from '../components/Navigator.vue';
import PromptWork from '../components/PromptWork.vue';
import { data, background } from '../data/data'
import PFooter from '../components/PFooter.vue';
import Action from '../components/Action.vue';
import MessageApi from '../components/message-api.vue';
import Dropdown from '../components/Dropdown.vue';
import PHeader from '../components/PHeader.vue';
import CardEditor from '../components/CardEditor.vue';
import { tagsRef,tagsDetail } from '../store/store'
import { queryAllData } from '../api';

onMounted(() => {
  initData()
});

const selectedCardDetail = ref('');
const textHistory = ref<string[]>([]);
const text = ref('');
const title = ref('');
const selectedKey = ref('ChatGPT');
const chatGPTNames = computed(() => data.categories!.map((category) => ({
  name: category.name,
  color: category.color
})));
const mIdJourneyNames = computed(() => data.midCategories!.map((category) => ({
  name: category.name,
  color: category.color
})));
const isGPT = ref(true);

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

const activeButton = ref('背景');

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
  console.log(selectedKey.value)
  if (selectedKey.value === 'ChatGPT') {
    text.value += cardText + '\n';
    textHistory.value.push(cardText + '\n');
  } else if (selectedKey.value === 'MidJourney') {
    text.value += cardText + ', ';
    textHistory.value.push(cardText + ', '); 
  } else {
    text.value += cardText + '\n';
    textHistory.value.push(cardText + '\n');
  }
  console.log(text.value);
};

//实现 handleUpdateModelValue 方法
const handleUpdateModelValue = (value: string) => {
  text.value = value;
};

const handleUpdateTitle = (value: string) => {
  title.value = value;
};

const updateKey = (key: string) => {
  selectedKey.value = key
  //刷新页面
  if (selectedKey.value === "ChatGPT") {
    isGPT.value = true;
    activeButton.value = "背景"
  } else if (selectedKey.value === "MidJourney") {
    isGPT.value = false;
    activeButton.value = "质量"
  }
}

const handleAction = (value:string) => {
  console.log('111')
  text.value += value + '\n';
  textHistory.value.push(value + '\n');
}

// const updateStep = (step: number) => {
//   if (step === 1) {
//     activeButton.value = '背景'
//   } else if (step === 2) {
//     activeButton.value = '角色设定'
//   } else if (step === 3) {
//     activeButton.value = '行动任务'
//   } else if (step === 4) {
//     activeButton.value = '输出要求'
//   }
// }

// 新增计算属性，根据 selectedKey 的值动态决定按钮标签
const navigatorLabels = computed(() => {
  if (selectedKey.value === 'ChatGPT') {
    return chatGPTNames.value;
  } else if (selectedKey.value === 'MidJourney') {
    return mIdJourneyNames.value;
  }
  return chatGPTNames.value // return by default
});

const addTagToTagsRef = (tagText: any) => {
  if (!tagsRef.value.includes(tagText)) {
    tagsRef.value.push(tagText);
  }
};

const addDetailToTagsRef = (tagText: any) => {
  if (!tagsDetail.value.includes(tagText)) {
    tagsDetail.value.push(tagText);
  }
}

const initData = async () => {
  // 初始化数据
  queryAllData().then(
    res => console.log(res.data)
  ).catch
    (err => console.log(err))
}
</script>
  
<style scoped>
.app {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  padding: 20px;
}

.left-container {
  width: 20%;
}

.right-container {
  width: 30%;
}

.card-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
}

@media (max-width: 768px) {

  .app,
  .left-container,
  .right-container,
  .card-container {
    padding: 10px;
    border-radius: 5px;
  }
}</style>