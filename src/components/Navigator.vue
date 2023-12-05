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
  buttonLabels: Array
});

const emit = defineEmits(["navigate"]);

const navigate = (button: any) => {
  emit("navigate", button);
};
</script>

<style scoped>
.navigator {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  /* 可以添加更多样式来美化按钮 */
}

.btn {
  /* 按钮样式 */
  border-radius: 5px;
}
</style>
