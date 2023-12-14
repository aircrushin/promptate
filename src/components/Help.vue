<template>
    <div>
        <font-awesome-icon class="fa-question-circle" icon="fa-question-circle" @mouseover="showTooltip" @mouseleave="hideTooltip" />
        <div class="tooltip" v-if="isTooltipVisible">
            Tooltip infomation
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

const isTooltipVisible = ref(false)

function showTooltip() {
    isTooltipVisible.value = true
}

function hideTooltip() {
    isTooltipVisible.value = false
}
</script>
  
<style scoped>
.info-icon .fa-question-circle {
    cursor: pointer;
    position: relative;
    background-color: #eee;
}


.tooltip {
    margin-top: 10px;
    position: absolute;
    background: #aaa;
    color: white;
    padding: 5px;
    border-radius: 6px;
}
</style>