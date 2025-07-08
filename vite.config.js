// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// ❌ Removed unused import: v8Coverage

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,             // ✅ Fixes "test" and "expect" undefined in Vitest
    environment: 'jsdom',      // ✅ Needed for DOM testing in React
    coverage: {
      provider: 'v8',          // ✅ Coverage provider
    }
  },
})
