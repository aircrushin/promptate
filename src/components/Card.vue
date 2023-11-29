<template>
  <div class="card" @click="handleClick">
    {{ text }}
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

// 定义属性
const props = defineProps({
  text: String,
});

// 定义可以发出的事件
const emit = defineEmits(['click']);

// 方法
const handleClick = (event: Event) => {
  event.stopPropagation(); // 阻止事件冒泡
  emit('click');
};
</script>


<style scoped>
.card {
  border: 1px solid #ddd; /* 灰色边框 */
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2); /* 轻微的阴影效果 */
  padding: 10px; /* 内边距 */
  margin: 10px; /* 外边距 */
  text-align: center; /* 文本居中 */
  cursor: pointer; /* 鼠标悬停时显示指针 */
  transition: all 0.3s ease; /* 平滑的过渡效果 */
}

.card:hover {
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3); /* 悬停时增加阴影 */
  transform: translateY(-5px); /* 轻微向上移动 */
}
</style>
