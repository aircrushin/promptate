<template>
  <div class="navigator">
    <n-button v-for="button in buttons" :key="button" @click="navigate(button)" class="btn">
      {{ button }}
    </n-button>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";

const buttons = ["内容1", "内容2", "内容3", "内容4", "内容5", "内容6"];
const emit = defineEmits(["navigate"]);

const navigate = (button: string) => {
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
