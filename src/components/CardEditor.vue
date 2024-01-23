<template>
    <div class="container">
        <n-dynamic-tags v-model:value="tagsRef" />
    </div>
</template>
  
<script setup lang="ts">
import { ref, watch } from 'vue'
import { tagsRef, tagsDetail } from '../store/store'

watch(tagsDetail, (newTags, oldTags) => {
  // 检测哪些标签被移除了
  const removedTags = oldTags.filter(tag => !newTags.includes(tag));
  console.log(removedTags)
  // 处理移除的标签
  removedTags.forEach(removedTag => {
    // 在这里实现移除逻辑
    // 例如，更新状态或发送请求等
  });
});
</script>

<style>
.container {
    display: flex;
}
</style>