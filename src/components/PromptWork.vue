<template>
  <div class="PromptWork">
    <div class="title">
      <input type="text" v-model="inputTitle" placeholder="" />
    </div>
    <div class="input"> 
      <textarea class="input" v-model="inputValue" placeholder="" rows='6' spellcheck="false"></textarea>
    </div>
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
.PromptWork {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
 }
 
 .title {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
 }
 
 .title input {
  padding: 5px 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
 }
 
 .input {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
 }
 
 .input textarea {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  resize: none;
  width: 100%;
  height: 200px;
 }
</style>
