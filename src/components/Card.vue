<template>
  <div>
    <n-popover trigger="hover">
      <template #trigger>
        <div class="card" @click="emitAddTag" @mouseover="showDetail = true" @mouseleave="showDetail = false">
          <div class="color-bar" :style="{ backgroundColor: computedColor }"></div>
          <div class="text-content">{{ text }}</div>
        </div>
      </template>
      <span>{{ detail }}</span>
    </n-popover>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps({
  text: String,
  detail: String,
  color: String
});

// 定义可以发出的事件
const emit = defineEmits(['add-tag','add-detail']);

// 方法
const emitAddTag = () => {
  emit('add-tag', props.text);
  emit('add-detail', props.detail)
};

// 控制详细信息显示的状态
const showDetail = ref(false);

// 计算属性，根据原始颜色返回修改后的颜色
const computedColor = computed(() => {
  return props.color === 'yellow' ? 'orange' : props.color;
});


</script>


<style scoped>
.card {
  position: relative;
  border: 1px solid #e0e0e0;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 10px;
  display: flex;
  align-items: center; 
}

.color-bar {
  width: 5px; 
  height: 20px; 
  border-radius: 5px; 
}

.text-content {
  padding-left: 10px; 
  text-align: left;
  flex-grow: 1;
}

.card:hover {
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .card {
    padding: 10px;
    font-size: 14px;
  }
}

</style>
