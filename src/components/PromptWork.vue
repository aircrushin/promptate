<template>
  <textarea v-model="inputValue" class="text-area"></textarea>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from 'vue';

const props = defineProps({
  modelValue: String,
});

const inputValue = ref(props.modelValue);

const emit = defineEmits(['update:modelValue']);

watch(inputValue, (newValue) => {
  emit('update:modelValue', newValue);
});
</script>

<style>
.styled-textarea {
  width: 100%;
  height: 150px; /* 或者根据需要调整 */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px; /* 调整为适合的字体大小 */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  resize: vertical; /* 允许垂直调整大小 */
}
</style>
