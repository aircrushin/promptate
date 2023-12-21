<template>
  <div class="navigator">
    <li class="slide1"></li>
    <li class="slide2"></li>
    <n-button v-for="buttonText in buttonLabels" :key="buttonText" @click="navigate(buttonText)" class="btn">
      {{ buttonText }}
    </n-button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

// 定义接收外部传入的按钮文本数组的 props
const props = defineProps({
  buttonLabels: Array,
  selectedKey: String // 新增接收 selectedKey 的 prop
});

const emit = defineEmits(["navigate"]);

const navigate = (button: any) => {
  emit("navigate", button);
};
</script>

<style scoped>
.navigator {
  margin-top: 20px;
  justify-content: space-between;
  gap: 20px;
  position: relative;
  border: none;
  display: flex;
  list-style: none;
  margin-bottom: 20px;
}

.btn {
  position: relative;
  padding: 15px 20px;
  font: 500 16px '优设标题黑';
  border: none;
  outline: none;
  color: rgb(70, 100, 180);
  display: flex;
  text-decoration: none;
  z-index: 3;
}

.btn:hover {
  transform: translateY(-2px);
  /* 轻微向上移动 */
}

.btn:active {
  transform: translateY(1px);
  /* 轻微向下移动 */
}

.slide1,
.slide2 {
  position: absolute;
  display: inline-block;
  height: 60px;
  border-radius: 10em;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1.05);
}

.slide1 {
  background-color: rgb(170, 190, 255);
  z-index: 2;
}

.slide2 {
  opacity: 0;
  background-color: rgba(170, 190, 255, .5);
  z-index: 1;
  box-shadow: 0 0 20px #ffffffaa inset;
}
</style>
