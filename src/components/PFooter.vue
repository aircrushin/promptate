<template>
  <footer class="footer">
    <div class="container">
      <p>© 2023 Designed by aircrushin</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed; /* 固定位置 */
  bottom: 0; /* 底部对齐 */
  left: 0; /* 左对齐 */
  right: 0; /* 右对齐 */
  padding: 20px 0;
  text-align: center;
  font-family: "JetBrains Mono";
  color: #9f9f9f;
  text-shadow: 0 1px 1px #ffffff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}
</style>
