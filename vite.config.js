import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),
        tailwindcss()
  ],
  base: '/MobileStore/', // Replace with your exact GitHub repository name
})
