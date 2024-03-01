<template>
  <div class="navigator" :style="{ color: color }">
    <li class="slide1"></li>
    <li class="slide2"></li>
    <n-button v-for="( buttonText, index ) in buttonLabels" :key="buttonText" @click="navigate(buttonText)" class="btn">
      <div class="color-bar" :style="{ backgroundColor: colorList[index] }"></div>
      <div class="text-content">{{ buttonText }}</div>
    </n-button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
// 定义接收外部传入的按钮文本数组的 props
const props = defineProps({
  buttonLabels: Array,
  selectedKey: String, // 新增接收 selectedKey 的 prop
  color: String
});

const colorList: string[] = ['orange','green','lightblue','blue','purple','orange']

const emit = defineEmits(["navigate"]);

const navigate = (button: any) => {
  emit("navigate", button);
};

// 计算属性，根据原始颜色返回修改后的颜色
const computedColor = computed(() => {
  return props.color === 'yellow' ? 'orange' : props.color;
});
</script>

<style scoped lang="scss">
:root {
  --hover-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  --active-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
.navigator {
  margin-top: 25px;
  justify-content: space-between;
  gap: 18px;
  position: relative;
  display: flex;
  list-style: none;
  margin-bottom: 6px;
}

.color-bar {
  width: 6px; 
  height: 15px; 
  border-radius: 6px; 
}

.text-content {
  padding-left: 10px; 
  padding-right: 6px;
  text-align: left;
  flex-grow: 1;
}

.btn {
  position: relative;
  padding: 15px 15px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: var(--hover-shadow);
  background: linear-gradient(to bottom, #f7f7f7, #e7e7e7);
}

.btn:active {
  transform: translateY(1px);
  box-shadow: var(--active-shadow);
}

.slide1,
.slide2 {
  position: absolute;
  display: inline-block;
  height: 60px;
  border-radius: 30px;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1.05);
}

.slide1 {
  background-color: var(--primary-color);
  z-index: 2;
  box-shadow: 0 4px 8px rgba(170, 190, 255, 0.4);
}

.slide2 {
  opacity: 0;
  background-color: rgba(170, 190, 255, 0.5);
  z-index: 1;
  box-shadow: 0 0 20px #ffffffaa inset;
}

@media (max-width: 768px) {
  .btn {
    padding: 10px 15px;
    font-size: 14px;
  }
}

</style>
