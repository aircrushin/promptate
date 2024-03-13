<template>
    <div class="PromptWork">
        <div class="test">
            <h2 class="title">测试区</h2>
        </div>
        <div class="input">
            <textarea class="input" placeholder="" rows="4" spellcheck="false"></textarea>
        </div>
        <div class="editor">
            <n-button class="btn" @click="chat(props.inputValue!)">测试</n-button>
            <n-button class="btn">清空</n-button>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { testPrompt } from "../api"

const props = defineProps({
    inputValue: String,
});

function chat(message: string) {
    let titleString: string = props.inputValue!
    console.log(titleString);
    //@ts-ignore
    window.onmessage!.info("正在生成结果...", { duration: 5000 });

    testPrompt(message)
        .then(({ data }) => {
            console.log(data.response);
            //betterContent.value = data.response;
        })
        .catch((err) => {
            //@ts-ignore
            window.onmessage!.error("error!", { duration: 2000 });
            console.log(err);
        });
}
</script>
  
<style scoped lang="scss">
.PromptWork {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
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
  