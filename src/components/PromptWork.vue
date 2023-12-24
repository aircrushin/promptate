<template>
  <div class="PromptWork">
    <h2>工作区</h2>
    <div class="input">
      <textarea class="input" v-model="inputValue" placeholder="输入您的提示词" rows="6" spellcheck="false"></textarea>
    </div>
    <div class="editor">
      <n-message-provider>
        <n-button class="btn" @click="copyToClipboard(inputValue!)">复制</n-button>
        <n-button class="btn" @click="inputValue = ''">清空</n-button>
        <n-button class="btn" @click="betterPrompt">优化</n-button>
        <n-modal v-model:show="showModal" :mask-closable="false" preset="dialog" title="优化结果" :content="betterContent"
          positive-text="复制" negative-text="算了" @positive-click="onPositiveClick" @negative-click="onNegativeClick" />
      </n-message-provider>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, defineEmits } from "vue";
import copyToClipboard from "../utils/copy"
import { optimizePrompt } from "../api";

const props = defineProps({
  modelValue: String,
  title: String,
});

const showModal = ref(false)
const betterContent = ref('')

function betterPrompt() {
  let titleString: string = inputValue.value || "wrire a poem";
  console.log(titleString)
  //@ts-ignore
  window.onmessage!.info('正在优化中...',{ duration: 5000 })
  optimizePrompt(titleString).then(
    ({ data }) => {
      console.log(data.response);
      betterContent.value = data.response
      showModal.value = true
    })
    .catch((err) => {
      console.log(err);
    });
}

function onNegativeClick() {
  //@ts-ignore
  window.onmessage!.success('取消')
  showModal.value = false
}

function onPositiveClick() {
  copyToClipboard(betterContent.value)
  showModal.value = false
}

const inputTitle = computed({
  get: () => props.title,
  set: (val) => emit("update:title", val),
});

const inputValue = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});

const emit = defineEmits(["update:modelValue", "update:title"]);

watch(inputTitle, (newValue) => {
  emit("update:title", newValue);
});
watch(inputValue, (newValue) => {
  emit("update:modelValue", newValue);
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

.input {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.input textarea {
  font-family: "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-style: italic;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  /* 灰色边框 */
  border-radius: 5px;
  /* 圆角边框 */
  outline: none;
  /* 去除默认轮廓 */
  resize: none;
  /* 禁止调整大小 */
  width: 300px;
  /* 宽度 */
  height: 200px;
  /* 高度 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  /* 轻微的阴影效果 */
  transition: border-color 0.3s, box-shadow 0.3s;
  /* 平滑的过渡效果 */
}

h2 {
  letter-spacing: 2px;
  font-family: "Helvetica Neue", sans-serif;
  /* Instagram uses a clean, sans-serif font */
  font-size: 20px;
  /* A sizeable font for visibility */
  text-align: center;
  /* Center align the title */
  color: white;
  /* White color for the text */
  background: -webkit-linear-gradient(left, #a8c0ff 0%, #3f2b96 100%);
  /* Cooler gradient with lighter start and darker end for contrast */
  background: linear-gradient(to right, #a8c0ff 0%, #3f2b96 100%);
  /* Standard syntax for gradient */
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  /* Rounded corners */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16), 0 2px 4px rgba(0, 0, 0, 0.23);
  /* Slight shadow for depth */
}

.editor {
  display: flex;
  /* 使用flex布局 */
  justify-content: center;
  /* 水平居中 */
  gap: 10px;
  /* 按钮之间的间隙 */
}

.btn {
  padding: 10px 20px;
  /* 按钮内边距 */
  border: none;
  /* 移除边框 */
  border-radius: 5px;
  /* 圆角边框 */
  text-transform: uppercase;
  /* 文本转换为大写 */
  font-weight: bold;
  /* 字体加粗 */
  cursor: pointer;
  /* 鼠标悬停时显示指针 */
  transition: background-color 0.3s, transform 0.3s;
  /* 平滑的过渡效果 */
}

/* Styling the container */
.raw-prompt {
  width: 300px;
  text-align: center;
  /* Center the input field */
  margin: 0px;
  padding: 10px;
  border-radius: 5px;
  /* Rounded corners */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16), 0 1px 2px rgba(0, 0, 0, 0.23);
  /* Subtle shadow for depth */
}

/* Styling the input field */
.raw-prompt input[type="text"] {
  font-family: 'Helvetica Neue', sans-serif;
  /* Clean, sans-serif font */
  font-size: 16px;
  /* Appropriate size for input text */
  color: black;
  /* Black text color */
  border: none;
  /* Remove default border */
  outline: none;
  /* Remove focus outline */
  background-color: rgba(255, 255, 255, 0.8);
  /* Slightly transparent white background for readability */
  padding: 10px 15px;
  /* Padding inside the input field */
  border-radius: 5px;
  /* Rounded corners */
  width: 80%;
  /* Width relative to parent container */
  box-sizing: border-box;
  /* Include padding and border in the element's total width and height */
  transition: background-color 0.3s ease;
  /* Smooth transition for background color */
}</style>
