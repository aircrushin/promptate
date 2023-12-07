<template>
  <!-- <n-page-header subtitle="PROMPTATE" class="header">
    <a href="https://github.com/your-github-username">GitHub</a>
  </n-page-header> -->
  <div class="IndexPage">
    <nav>
        <a class="logo" href="https://gitee.com/ultrav/promptate"><b>PROMPTATE</b>/GitHub</a>
    </nav>
</div>
  </template>
  
  <script setup lang="ts">

  </script>
  
  <style scoped lang="scss">
  .IndexPage {
    > nav {
        display: flex;
        place-items: center;
        padding-top: 11px;
        padding-bottom: 20px;
        padding-left: 23px;
        padding-right: 14px;
        .logo {
            font-family: "JetBrains Mono";
            color: #9f9f9f;
            text-shadow: 0 1px 1px #ffffff;
            display: flex;
            place-items: center;
            font-weight: 200;
            display: flex;
            place-content: flex-start;
            text-decoration: none;
        }
      }
  }
  </style>
  