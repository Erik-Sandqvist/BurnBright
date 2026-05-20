import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  base: '/BurnBright/',
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/umbraco': {
        target: 'https://localhost:7210',
        changeOrigin: true,
        secure: false,
      },
      '/media': {
        target: 'https://localhost:7210',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
