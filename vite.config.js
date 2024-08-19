import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/officialebs/",
  plugins: [react()],
  server: {
    open: true, // Automatically open the app in the browser
    port: 3000, // Specify a port
  },
  build: {
    outDir: 'dist', // Output directory for the build
  },
})
