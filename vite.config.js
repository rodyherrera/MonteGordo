import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5000
  },
  resolve: {
    alias: {
      '@': '/src/',
      '@pages': '/src/pages/',
      '@components': '/src/components/',
      '@styles': '/src/assets/stylesheets/',
      '@hooks': '/src/hooks/'
    }
  }
});