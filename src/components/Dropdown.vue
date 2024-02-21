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
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  margin-right: 20px;
}

.n-button {
  color: white;
  background: -webkit-linear-gradient(
    left,
    #a8c0ff 0%,
    #3f2b96 100%
  ); 
  background: linear-gradient(
    to right,
    #a8c0ff 0%,
    #3f2b96 100%
  ); /* Standard syntax for gradient */
  border: none; /* 无边框 */
  text-align: center; /* 文本居中 */
  text-decoration: none; /* 无下划线 */
  display: inline-block;
  font-size: 16px; 
  margin: 4px 2px;
  cursor: pointer; 
  border-radius: 8px; 
}

.n-button :hover {
    color: aliceblue;
}
</style>
