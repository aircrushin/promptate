<template>
    <iframe class="outer" frameborder="0" :src="url"></iframe>
</template>
 
<script setup lang="ts">

const url = `https://promptate-chatbot.streamlit.app/`
// const url = `https://chat.openai.com/chat`

</script>
 
<style>
.outer {
    width: 100%;
    height: 100%;
}
</style>
 