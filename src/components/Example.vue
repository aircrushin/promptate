<template>
    <div class="main">
        <p>Example:</p>
        <Card v-for="card in exampleCards" :text="card.text"
            @click="addText(card.detail)" class="card-container">
        </Card>
    </div>
</template>

<script setup lang="ts">
import Card from './Card.vue';
import { ref } from 'vue';
const exampleCards = [{
    button: '1',
    text: 'Text 1',
    detail: 'Detail 1'
}, {
    button: '2',
    text: 'Text 2',
    detail: 'Detail 2'
}]

const addText = (text: string) => {
    console.log(text);
}
</script>

<style scoped>
.main {
    
}

p {
    color: #888;
}

.card-container {
    display: inline;
    width: 60px;
    height: 20px;
}
</style>