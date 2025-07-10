import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/auth': 'https://referal-management-system-2pby.onrender.com',
      '/candidates': 'https://referal-management-system-2pby.onrender.com',
    }
  }
})
