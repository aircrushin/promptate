<template>
    <div class="container">
      <n-float-button class="btn">
        <a href="https://promptate-chatbot.streamlit.app/">
        <n-icon size="24">
          <cash-icon />
        </n-icon>
    </a>
      </n-float-button>
    </div>
</template>
  
<script lang="ts" setup>
import { ChatboxEllipsesOutline as CashIcon } from '@vicons/ionicons5'
</script>

<style scoped lang="scss">
.btn {
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 100%;
    position: fixed; /* 固定定位，确保按钮始终在视口内 */
    right: 50px; /* 定位到右边界 */
    bottom: 50px; /* 定位到底部边界 */
    background: #fff;
    color: #999;
    cursor: pointer;
    --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -2px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.btn:hover {
    transform: scale(1.1); /* 放大到原来的 110% */
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 8px 10px -6px rgba(0, 0, 0, 0.1); /* 鼠标悬停时增强阴影效果 */
}
</style>
