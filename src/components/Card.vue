<template>
  <div class="card" @click="handleClick" @mouseover="showDetail = true" @mouseleave="showDetail = false" :style="{ backgroundColor: color }">
    {{ text }}
    <div v-if="showDetail" class="detail">
      {{ detail }}
    </div>
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
const emit = defineEmits(['click']);

// 方法
const handleClick = (event: Event) => {
  event.stopPropagation(); // 阻止事件冒泡
  emit('click');
};

// 控制详细信息显示的状态
const showDetail = ref(false);

</script>


<style scoped>
.card {
  position: relative; /* 添加这行以便对子元素定位 */
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
  background-color: aliceblue;
}

.detail {
  padding: 10px;
  margin-top: 5px;
  border-radius: 5px;
  background-color: #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition-delay: 1s; /* 设置过渡延迟为1秒 */
  transition: opacity 0.3s ease-in-out;
  opacity: 0;
  position: absolute;
  right: 10; /* 从左改为右 */
  bottom: 20; /* 从顶部改为底部 */
  min-width: 150px;
  z-index: 100;
}

.detail {
  opacity: 1; /* 移动到这里确保只在悬停时显示 */
}
</style>
