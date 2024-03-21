<template>
<div class="cont">
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
        <Action @addText="addText" :modelValue="actionInputValue" />
        <!-- <Action v-if="activeButton === '行动任务'" @addText="handleAction"></Action> -->
        <Card v-for="card in filteredCardItems" :key="card.button" :text="card.text" :detail="card.detail"
          :color="card.color" v-show="activeButton === card.button" @click="handleCardClick(card.detail!)"
          @add-tag="addTagToTagsRef" @add-detail="addDetailToTagsRef">
        </Card>
      </div>
      <Chat></Chat>
    </div>
  </div>
</div>
<PFooter></PFooter>
</template>
   
<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import Card from '../components/Card.vue';
import Chat from '../components/Chat.vue'
import Navigator from '../components/Navigator.vue';
import PromptWork from '../components/PromptWork.vue';
import { data, background } from '../data/data'
import PFooter from '../components/PFooter.vue';
import Action from '../components/Action.vue';
import MessageApi from '../components/message-api.vue';
import Dropdown from '../components/Dropdown.vue';
import PHeader from '../components/PHeader.vue';
import { queryAllData } from '../api';
import { useRouter } from 'vue-router';
import { usePromptStore } from '../store/store';
//import { glmTest } from '../api/model'

const router = useRouter();


onMounted(async () => {
    // 调用queryAllData并等待结果
    const response = await queryAllData();
    console.log(response.data);
    console.log(Array.isArray(response.data)); 
    // 假设返回的数据格式和background.data相同
    cardItems.value = response.data.map((item: any) => ({
      button: item.type,
      text: item.keyWord,
      detail: item.detail,
      color: item.color
    }));
    console.log(cardItems.value)
});

//token
// const apiKey = "c87755766bf2af696e8fef3a715ff2f2.Vn5KXqmxFOgxig8K";
// const expSeconds = 36000000; // token有效期，单位为秒
// const selectedCardDetail = ref('');
const textHistory = ref<string[]>([]);
const actionInputValue = ref('');
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
const sunoNames = computed(() => data.sunoCatagories!.map((category) => ({
  name: category.name,
  color: category.color
})));
const isGPT = ref(true);

const promptStore = usePromptStore();
watch(actionInputValue, (newValue) => {
  console.log('父组件 actionInputValue 更新:', newValue);
});

interface cardItemsType {
  button: string;
  text: string | undefined;
  detail: string | undefined;
  color: string | undefined;
}

const cardItems = ref<cardItemsType[]>([]);
// const cardItems: cardItemsType[] = background.data.map((item, index) => ({
//   button: item.type,
//   text: item.keyWord,
//   detail: item.detail,
//   color: item.color
// }));

const activeButton = ref('背景');

// 方法
const handleNavigation = (button: string) => {
  activeButton.value = button;
};

const handleCardClick = (detail: string) => {
  actionInputValue.value = detail; // 更新 inputValue 的值
  console.log(actionInputValue.value)
};

// 创建过滤后的 cardItems 计算属性
const filteredCardItems = computed(() => {
  if (!activeButton.value) {
    return;
  }
  return cardItems.value.filter((card: { button: string; }) => card.button === activeButton.value);
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
  }else if (selectedKey.value === 'Suno') {
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
  promptStore.updateInputValue(value);
  console.log(promptStore.inputValue)
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
  } else if (selectedKey.value === "Suno") {
    isGPT.value = false;
    activeButton.value = "段落"
  }
}

const handleAction = (value: string) => {
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
  } else if (selectedKey.value === 'Suno') {
    return sunoNames.value
  }
  return chatGPTNames.value // return by default
});

const addTagToTagsRef = (tagText: any) => {
  // if (!tagsRef.value.includes(tagText)) {
  //   tagsRef.value.push(tagText);
  // }
};

const addDetailToTagsRef = (tagText: any) => {
  // if (!tagsDetail.value.includes(tagText)) {
  //   tagsDetail.value.push(tagText);
  // }
}

const toChatBot = () => {
  router.push('/chatbot')
}


</script>
  
<style scoped>
.cont {
  background-color: white;
  min-height: 100vh;
}
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
  margin-right: 2rem;
}

.card-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
}

@media (max-width: 768px) {
  .app {
    flex-direction: column; /* 在移动设备上垂直堆叠容器 */
    align-items: center; /* 居中对齐子元素 */
  }

  .left-container, .right-container {
    width: 90%; /* 增加移动设备上的容器宽度 */
    margin-right: 0; /* 移除右容器的外边距 */
  }

  .card-container {
    justify-content: center; /* 在移动设备上居中卡片 */
  }

  .chat-container {
    flex-direction: column; /* 调整聊天容器布局 */
  }
}

.chat-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.robot-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  font-size: 24px;
  border-radius: 50%;
  color: #ddd;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  transition: transform 0.3s ease;
}

.robot-button:hover {
  transform: scale(1.1);
}

.test-prompt {
  margin-left: 10px;
  font-size: 10px;
  margin-top: 20px;
  color: #aaa;
}

.input {
    margin: 0 auto;
    min-width: 300px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: border-color 0.3s, box-shadow 0.3s;
}
</style>