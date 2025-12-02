import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // Changez 'Portfolio' par le nom de votre repository GitHub
  server: {
    port: 5173,
    open: true
  }
})

