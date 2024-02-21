<template>
    <div class="editor">
        <div style="border: 1px solid #ccc; margin:8px">
            <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig"
                :mode="mode" />
            <Editor style="height: 220px; width: 360px; overflow-y: hidden;" v-model="valueHtml" :defaultConfig="editorConfig" :mode="mode"
                @onCreated="handleCreated" />
        </div>
    </div>
</template>

<script setup lang="ts">
import "@wangeditor/editor/dist/css/style.css";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import { shallowRef, ref, onBeforeUnmount } from "vue";

const toolbarConfig = {
    // 指定工具栏要显示的按钮
    toolbarKeys: ['bulletedList', 'numberedList', 'codeBlock']
}

const editorConfig = {
    placeholder: '请输入您的提示词...'
}

const mode = "default";

// 编辑器实例，必须用 shallowRef，重要！
const editorRef = shallowRef();

const handleCreated = (editor: any) => {
    console.log("created", editor);
    editorRef.value = editor; // 记录 editor 实例，重要！
};

// 绑定数据
const valueHtml = ref("");

// 组件销毁时，也及时销毁编辑器，重要！
onBeforeUnmount(() => {
    const editor = editorRef.value;
    if (editor == null) return;

    editor.destroy();
});
</script>

<style scoped>
.editor {
    border-radius: 5px;
    text-align: left;
    display: flex;
    flex-direction: column;
}
</style>