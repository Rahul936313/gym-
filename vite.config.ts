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
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-swiper': ['swiper'],
          'vendor-router': ['react-router-dom'],
          'vendor-icons': ['react-icons'],
        },
      },
    },
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=3600',
    },
  },
})

