<template>
  <div class="PromptWork">
    <h2>工作区</h2>
    <div class="input"> 
      <textarea class="input" v-model="inputValue" placeholder="输入您的提示词" rows='6' spellcheck="false"></textarea>
    </div>
    <div class="editor">
      <n-message-provider>
        <n-button class="btn" @click="copyToClipboard">复制</n-button>
        <n-button class="btn" @click="inputValue = ''">清空</n-button>
      </n-message-provider>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref, computed, watch, defineEmits, h } from 'vue';



//const message = useMessage()

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

//methods
const copyToClipboard = () => {
  // 检查inputValue是否定义且不为空或仅包含空白字符
  if (inputValue && inputValue.value && inputValue.value.trim()) {
    navigator.clipboard.writeText(inputValue.value).then(() => {
    //@ts-ignore
    window.onmessage!.success("复制成功");
      // 复制成功后的操作，如显示通知或更改按钮状态
      console.log("复制成功！");
    }).catch(err => {
      // 处理复制失败的情况
      console.error("复制失败: ", err);
    });
  }
};
</script>

<style scoped>
.PromptWork {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
 }
 
 .input {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
 }
 
 .input textarea {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc; /* 灰色边框 */
  border-radius: 5px; /* 圆角边框 */
  outline: none; /* 去除默认轮廓 */
  resize: none; /* 禁止调整大小 */
  width: 300px; /* 宽度 */
  height: 200px; /* 高度 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 轻微的阴影效果 */
  transition: border-color 0.3s, box-shadow 0.3s; /* 平滑的过渡效果 */
}


 h2 {
  font-family: "JetBrains Mono";
 }

 .editor {
  display: flex; /* 使用flex布局 */
  justify-content: center; /* 水平居中 */
  gap: 10px; /* 按钮之间的间隙 */
}

.btn {
  padding: 10px 20px; /* 按钮内边距 */
  border: none; /* 移除边框 */
  border-radius: 5px; /* 圆角边框 */
  text-transform: uppercase; /* 文本转换为大写 */
  font-weight: bold; /* 字体加粗 */
  cursor: pointer; /* 鼠标悬停时显示指针 */
  transition: background-color 0.3s, transform 0.3s; /* 平滑的过渡效果 */
}
</style>
