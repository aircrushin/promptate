<template>
  <n-space vertical class="container">
    <n-transfer
      class="transfer"
      ref="transfer"
      v-model:value="value1"
      virtual-scroll
      :options="options1"
      source-filterable
    />
  </n-space>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

function createOptions() {
  return Array.from({ length: 10 }).map((v, i) => ({
    label: "Option " + i,
    value: i,
  }));
}

function createValues() {
  return Array.from({ length: 0 }).map((v, i) => i);
}

export default defineComponent({
  setup() {
    return {
      options1: createOptions(),
      value1: ref(createValues()),
    };
  },
});
</script>

<style scoped>
.container {
    width: 100%;
}

.transfer {
    width: 100%;
}
</style>
