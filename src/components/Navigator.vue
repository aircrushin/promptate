<template>
  <div class="navigator">
    <n-button v-for="buttonText in buttonLabels" :key="buttonText" @click="navigate(buttonText)" class="btn">
      {{ buttonText }}
    </n-button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

// 定义接收外部传入的按钮文本数组的 props
const props = defineProps({
  buttonLabels: Array,
  selectedKey: String // 新增接收 selectedKey 的 prop
});

const emit = defineEmits(["navigate"]);

const navigate = (button: any) => {
  emit("navigate", button);
};
</script>

<style scoped>
.navigator {
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.btn {
  border-radius: 5px; /* 圆角边框 */
  padding: 10px 20px; /* 内边距 */
  border: none; /* 移除边框 */
  text-transform: uppercase; /* 文本转换为大写 */
  font-weight: bold; /* 字体加粗 */
  cursor: pointer; /* 鼠标悬停时显示指针 */
  transition: background-color 0.3s, transform 0.3s; /* 平滑的过渡效果 */
}

.btn:hover {
  transform: translateY(-2px); /* 轻微向上移动 */
}

.btn:active {
  transform: translateY(1px); /* 轻微向下移动 */
}
</style>
