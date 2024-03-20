import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    proxy: {
      '/api': {
        //target: 'http://127.0.0.1:5000',
        target: 'https://promptate-backend.zeabur.app',
        //target: 'http://43.136.174.253:5000',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, '')
        },
      }
  },
  define: {
    'process.env': {}
  }
})
