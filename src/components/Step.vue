<template>
  <n-space vertical class="container">
    <n-steps :current="(currentRef as number)" :status="currentStatus">
      <n-step title="背景" description="确定Prompt的前置背景条件" />
      <n-step title="角色" description="根据问题，设定模型的角色" />
      <n-step title="行动" description="需要让模型做什么事" />
      <n-step title="输出" description="限定模型输出的格式，字数等" />
    </n-steps>
    <n-space class="arrow">
      <n-button-group>
        <n-button @click="prev">
          <template #icon>
            <n-icon>
              <md-arrow-round-back />
            </n-icon>
          </template>
        </n-button>
        <n-button @click="next">
          <template #icon>
            <n-icon>
              <md-arrow-round-forward />
            </n-icon>
          </template>
        </n-button>
      </n-button-group>
    </n-space>
  </n-space>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { MdArrowRoundBack, MdArrowRoundForward } from '@vicons/ionicons4'
import { StepsProps } from 'naive-ui'


const emit = defineEmits(["update:step"])
const currentRef = ref<number | null>(1)
const currentStatus = ref<StepsProps['status']>('process')

function next() {
  if (currentRef.value === null)
    currentRef.value = 1
  else if (currentRef.value >= 4)
    currentRef.value = null
  else
    currentRef.value++
}

function prev() {
  if (currentRef.value === 0)
    currentRef.value = null
  else if (currentRef.value === null)
    currentRef.value = 4
  else
    currentRef.value--
}

watch(currentRef, (newRef) => {
     emit('update:step', newRef)
     console.log(newRef)
   })
</script>

<style scoped>
.container {
  margin-top: 10vh;
}

.arrow {
  margin-top: 20px;
}
</style>