<template>
  <div class="PromptWork">
    <h2>工作区</h2>
    <div class="input">
      <textarea class="input" v-model="inputValue" placeholder="输入您的提示词..." rows="6" spellcheck="false"></textarea>
      <!-- <TextEditor></TextEditor> -->
    </div>
    <div class="editor">
      <n-message-provider>
        <n-button class="btn" @click="copyToClipboard(inputValue!)">复制</n-button>
        <n-button class="btn" @click="inputValue = ''">清空</n-button>
        <n-button class="btn" @click="betterPrompt">优化</n-button>
        <n-modal v-model:show="showModal" :mask-closable="false" preset="dialog" title="优化结果" :content="betterContent"
          positive-text="复制" negative-text="算了" @positive-click="onPositiveClick" @negative-click="onNegativeClick" />
      </n-message-provider>
      <div class="chooser">
        <template>
          <slot></slot>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TextEditor from './TextEditor.vue'
import { ref, computed, watch } from "vue";
import copyToClipboard from "../utils/copy";
import { optimizePrompt, generatePromptMid } from "../api";

const props = defineProps({
  modelValue: String,
  title: String,
  isGPT: Boolean,
});

const showModal = ref(false);
const betterContent = ref("");

function betterPrompt() {
  console.log(props.isGPT);
  let titleString: string = inputValue.value || "wrire a poem";
  console.log(titleString);
  //@ts-ignore
  window.onmessage!.info("正在优化中...", { duration: 5000 });
  if (props.isGPT) {
    optimizePrompt(titleString)
      .then(({ data }) => {
        console.log(data.response);
        betterContent.value = data.response;
        showModal.value = true;
      })
      .catch((err) => {
        //@ts-ignore
        window.onmessage!.error("优化失败!", { duration: 2000 });
        console.log(err);
      });
  } else {
    // isGPT 为 false 时的逻辑
    generatePromptMid(titleString)
      .then(({ data }) => {
        console.log(data.response);
        betterContent.value = data.response;
        showModal.value = true;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

function onNegativeClick() {
  //@ts-ignore
  window.onmessage!.success("取消");
  showModal.value = false;
}

function onPositiveClick() {
  copyToClipboard(betterContent.value);
  showModal.value = false;
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
}

.input {
  text-align: left;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.text-editor {
  border-radius: 5px;
  text-align: left;
  display: flex;
  flex-direction: column;
}

.input textarea {
  font-family: "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-style: italic;
  padding: 10px;
  font-size: 16px;
  margin: 4px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  resize: none;
  width: 340px;
  height: 220px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s, box-shadow 0.3s;
}

h2 {
  letter-spacing: 2px;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 20px;
  text-align: center;
  color: white;
  background: -webkit-linear-gradient(left, #a8c0ff 0%, #3f2b96 100%);
  background: linear-gradient(to right, #a8c0ff 0%, #3f2b96 100%);
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16), 0 2px 4px rgba(0, 0, 0, 0.23);
}

.editor {
  margin-top: 8px;
  display: flex;
  justify-content: center;
  gap: 12px;

}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
}

.chooser {
  margin-top: 100px;
}
</style>
