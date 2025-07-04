import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 importa esta função
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // 👇 Aqui está o truque importante
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
  // 👇 Isto força comportamento SPA
  server: {
    historyApiFallback: true,
  },
})
