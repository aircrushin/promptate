<template>
    <div></div>
</template>
   
<script lang="ts">
import { defineComponent } from 'vue'
import { useLoadingBar } from 'naive-ui'

// content
export default defineComponent({
    setup() {
        const loadingBar = useLoadingBar()
        return {
            loading() {
                loadingBar.start()
            }
        }
    }
})
</script>
  
  