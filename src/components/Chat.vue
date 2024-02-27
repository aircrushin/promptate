<template>
    <div class="PromptWork">
        <div class="test">
            <h2 class="title">测试区</h2>
        </div>
        <div class="input">
            <textarea class="input" v-model="inputValue" placeholder="" rows="4" spellcheck="false"></textarea>
        </div>
        <div class="editor">
            <n-button class="btn" @click="copyToClipboard(inputValue!)">测试</n-button>
            <n-button class="btn" @click="inputValue = ''">清空</n-button>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref, computed, watch } from "vue";
import copyToClipboard from "../utils/copy";

const props = defineProps({
    modelValue: String,
    title: String,
    isGPT: Boolean,
});

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
  
<style scoped lang="scss">
.PromptWork {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%; /* 确保容器宽度充满父容器，这对居中很重要 */
}

.test {
    display: flex;
    flex-direction: row;
    justify-content: center; // 允许h2和按钮之间有空间
    align-items: center; // 使按钮垂直居中
    width: 100%;
}

.title {
    text-align: center; // 使文本居中
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

.input {
    text-align: left;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
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
    height: 160px;
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
    justify-content: end;
    gap: 12px;
}
</style>
  