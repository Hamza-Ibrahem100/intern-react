import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // إضافة Tailwind

export default defineConfig({
  plugins: [
    react(),
    tailwindcss() // تفعيل الإضافة هنا
  ],
  base: '/intern-react/',
})