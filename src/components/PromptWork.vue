<template>
  <div class="AddArea Area">
    <div class="WorkInfoArea Area">
        <div class="title">
          <input type="text" v-model="inputTitle" placeholder=""/>
        </div>
    </div>
    <textarea class="input" v-model="inputValue" placeholder="" rows="8" spellcheck="false"></textarea>
  </div>
</template>


<script setup lang="ts">
import { ref, computed, watch, defineEmits } from 'vue';

const props = defineProps({
  modelValue: String,
  title: String,
});

const inputTitle = computed({
  get: () => props.title,
  set: (val) => emit('update:title', val)
});

const inputValue = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
});

const emit = defineEmits(['update:modelValue', 'update:title']);

watch(inputTitle, (newValue) => {
  emit('update:title', newValue);
});
watch(inputValue, (newValue) => {
  emit('update:modelValue', newValue);
});
</script>

<style scoped>

.title {
  width: 100%;
  margin-bottom: 10px;
}
.input {
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
