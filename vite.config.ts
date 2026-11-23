import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/my-portfolio/' : '/',
  server: { port: 5274 },
  preview: { port: 5274, strictPort: false },
}))
