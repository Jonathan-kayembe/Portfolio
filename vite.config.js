import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path : '/' pour Vercel, '/Portfolio/' pour GitHub Pages
  // Utilise la variable d'environnement VITE_BASE_PATH si définie, sinon '/Portfolio/' par défaut
  base: process.env.VITE_BASE_PATH || '/Portfolio/',
  server: {
    port: 5173,
    open: true
  }
})

