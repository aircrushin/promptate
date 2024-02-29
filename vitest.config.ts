// vitest.config.js
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // 设置环境
    environment: 'jsdom',
    // 配置 Vue 文件的支持
    globals: true,
    setupFiles: ['./setupTests.js'], // 如果你有测试前的设置脚本
    // 指定测试文件的位置和模式，如不设置则默认寻找 __tests__ 文件夹下的 .test 或 .spec 文件
    include: ['**/__tests__/**/*.test.js', '**/tests/**/*.test.js'],
  },
});
