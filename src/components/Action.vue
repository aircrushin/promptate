<template>
    <div class="container">
        <div class="input">
            <textarea v-model="inputValue" placeholder="输入您的行动" rows="1" spellcheck="false"></textarea>
        </div>
        <div class="editor">
            <n-message-provider>
                <n-button class="btn" @click="copyToWorkspace(inputValue!)">加入</n-button>
                <n-button class="btn" @click="inputValue = ''">清空</n-button>
            </n-message-provider>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: String,
  title: String,
});

const inputValue:string = props.modelValue as string
const emit = defineEmits(['addText']);
const copyToWorkspace = (value:string) => {
    emit('addText', value); 
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: row; 
    align-items: center; 
    justify-content: center; 
    padding: 20px; 
}

.input, .editor {
    width: 100%; 
    display: flex;
    justify-content: center;
}

.input textarea {
    min-width: 300px;
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    resize: none;
    height: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: border-color 0.3s, box-shadow 0.3s;
}

.btn {
    display: flex;
    margin-left: 20px;
    justify-content: center;
    padding: 10px 10px;
    border: none;
    border-radius: 5px;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
}
</style>