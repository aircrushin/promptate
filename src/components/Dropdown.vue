<!-- Dropdown.vue -->
<template>
  <div class="dropdown-container">
    <n-dropdown trigger="hover" :options="options" @select="emitSelectedKey">
      <n-button>{{ DName }}</n-button>
    </n-dropdown>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";
const props = defineProps({
  selectedkey: {
    type: String,
  },
});
const DName = ref("ChatGPT");
props.selectedkey && (DName.value = props.selectedkey);
const options = [
  {
    label: "ChatGPT",
    key: "ChatGPT",
  },
  {
    label: "MidJourney",
    key: "MidJourney",
  },
];

const emit = defineEmits(["update:key"]);

const emitSelectedKey = (key: string) => {
  DName.value = key;
  emit("update:key", key);
};
</script>

<style scoped>
.dropdown-container {
  display: flex;
  justify-content: flex-start; /* 使组件靠右对齐 */
  margin-right: 20px; /* 右侧边距 */
}

.n-button {
  color: white; /* White color for the text */
  background: -webkit-linear-gradient(
    left,
    #a8c0ff 0%,
    #3f2b96 100%
  ); /* Cooler gradient with lighter start and darker end for contrast */
  background: linear-gradient(
    to right,
    #a8c0ff 0%,
    #3f2b96 100%
  ); /* Standard syntax for gradient */
  border: none; /* 无边框 */
  text-align: center; /* 文本居中 */
  text-decoration: none; /* 无下划线 */
  display: inline-block;
  font-size: 16px; /* 字体大小 */
  margin: 4px 2px;
  cursor: pointer; /* 鼠标样式 */
  border-radius: 8px; /* 边框圆角 */
}

.n-button :hover {
    color: aliceblue;
}
</style>
