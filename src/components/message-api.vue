<template>
    <div></div>
  </template>
   
  <script lang="ts">
  import { defineComponent, getCurrentInstance } from "vue";
  //@ts-ignore
  import { useMessage } from "naive-ui";
   
  export default defineComponent({
    setup() {
      //@ts-ignore
      window.onmessage = useMessage();
    },
  });
  </script>
  
  