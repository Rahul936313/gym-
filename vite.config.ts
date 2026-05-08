import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
plugins: [react()],

base: '/',

build: {
outDir: 'dist',
sourcemap: false,
minify: true,
},

server: {
headers: {
'Cache-Control': 'public, max-age=3600',
},
},
})
