import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/shoppingreact",
  plugins: [react()],

  optimizeDeps: {
    disabled: true, // Completely disable Vite's dependency optimization
  },
  build: {
    minify: false, // Turn off minification in production to see clear error messages as well
  }
})
