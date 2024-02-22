<template>
    <div class="container">
        <n-dynamic-tags v-model:value="tagsRef" size="large" tag-style="{
          border-radius: 5px; /* 圆角边框 */
          cursor: pointer; /* 鼠标悬停时的光标样式 */
      }" round="true" :closable="false" />
    </div>
</template>
  
<script setup lang="ts">
import { ref, watch } from 'vue'
import { tagsRef } from '../store/store'

const emit = defineEmits(['close'])

watch(tagsRef, (newTags, oldTags) => {
  // 检测哪些标签被移除了
  const removedTags = oldTags.filter(tag => !newTags.includes(tag));
  console.log(removedTags)
  if(removedTags.length > 0){
    emit('close', removedTags) // 发射 close 事件并附带 removedTags
  }
});
</script>

<style>
.container {
    display: flex;
    gap: 10px;
}
</style>