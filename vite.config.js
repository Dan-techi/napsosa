import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    open: 'microsoft-edge',
  },
  base: '/napsosa/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    copyPublicDir: true,
  },
})
