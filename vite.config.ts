import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    rollupOptions: {
      output: {
         
      },
    },
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=3600',
    },
  },
})

