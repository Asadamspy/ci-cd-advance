// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import v8Coverage from '@vitest/coverage-v8'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'v8', // or 'istanbul'
    }
  },
})
