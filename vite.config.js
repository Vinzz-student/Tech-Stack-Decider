import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/Tech-Stack-Decider/",
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})