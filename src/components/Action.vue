<template>
    <div class="container">
        <div class="input">
            <textarea class="input" v-model="inputValue" placeholder="输入您的行动" rows="1" spellcheck="false"></textarea>
        </div>
        <div class="editor">
            <n-message-provider>
                <n-button class="btn" @click="copyToClipboard(inputValue!)">复制</n-button>
                <n-button class="btn" @click="inputValue = ''">清空</n-button>
            </n-message-provider>
        </div>
    </div>
</template>

<script setup lang="ts">
import copyToClipboard from "../utils/copy"

const props = defineProps({
  modelValue: String,
  title: String,
});

const inputValue:string = props.modelValue as string
const emit = defineEmits(["update:modelValue", "update:title"]);

</script>

<style scoped>
.container {
    display: flex;
    flex-direction: row; /* 垂直排列子元素 */
    align-items: center; /* 水平居中对齐 */
    justify-content: center; /* 垂直居中对齐 */
    padding: 20px; /* 容器内边距 */
}

.input, .editor {
    width: 80%; /* 宽度设置为100% */
    max-width: 600px; /* 最大宽度限制 */
    display: flex;
    justify-content: center; /* 水平居中对齐 */
}

.input textarea {
    min-width: 300px;
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    /* 灰色边框 */
    border-radius: 5px;
    /* 圆角边框 */
    outline: none;
    /* 去除默认轮廓 */
    resize: none;
    /* 宽度 */
    height: 20px;
    /* 高度 */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    /* 轻微的阴影效果 */
    transition: border-color 0.3s, box-shadow 0.3s;
    /* 平滑的过渡效果 */
}

.btn {
    display: flex;
    margin-left: 20px;
    justify-content: center;
    padding: 10px 10px;
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
</style>