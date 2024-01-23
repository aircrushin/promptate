<template>
  <div>
    <n-popover trigger="hover">
      <template #trigger>
        <div class="card" @click="emitAddTag" @mouseover="showDetail = true" @mouseleave="showDetail = false">
          <div class="color-bar" :style="{ backgroundColor: color }"></div>
          <div class="text-content">{{ text }}</div>
        </div>
      </template>
      <span>{{ detail }}</span>
    </n-popover>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { defineProps, defineEmits } from 'vue';

// 定义属性
const props = defineProps({
  text: String,
  detail: String,
  color: String
});

// 定义可以发出的事件
const emit = defineEmits(['add-tag','add-detail']);

// 方法
const emitAddTag = () => {
  //event.stopPropagation(); // 阻止事件冒泡
  emit('add-tag', props.text);
  emit('add-detail', props.detail)
};

// 控制详细信息显示的状态
const showDetail = ref(false);

</script>


<style scoped>
.card {
  position: relative;
  border: 1px solid #e0e0e0;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 10px;
  display: flex; /* Enable flex layout */
  align-items: center; /* Align items vertically */
}

.color-bar {
  width: 5px; /* Width of the colored bar */
  height: 20px; /* Full height of the card */
  border-radius: 5px; /* Rounded left corners */
}

.text-content {
  padding-left: 10px; /* Space between color bar and text */
  text-align: left; /* Align text to the left */
  flex-grow: 1; /* Allow the text to take up remaining space */
}

.card:hover {
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  transform: scale(1.05); /* Scale up slightly */
}

@media (max-width: 768px) {
  .card {
    padding: 10px;
    font-size: 14px;
  }
}

</style>
