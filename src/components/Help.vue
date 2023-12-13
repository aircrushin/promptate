<template>
    <div>
        <button class="fas fa-question-circle" @mouseover="showTooltip" @mouseleave="hideTooltip" >
            11111
        </button>
        <div class="tooltip" v-if="isTooltipVisible">
            Tooltip infomation
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue'

const isTooltipVisible = ref(false)

function showTooltip() {
    isTooltipVisible.value = true
}

function hideTooltip() {
    isTooltipVisible.value = false
}
</script>
  
<style>
.info-icon .fa-question-circle {
    cursor: pointer;
    position: relative;
}


.tooltip {
    position: absolute;
    background: #888;
    color: white;
    padding: 5px;
    border-radius: 6px;
}
</style>