import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 加上這行，指定你的 GitHub 儲存庫名稱
  base: '/rtparty/', 
})