import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' makes the built site work from any path,
// including a GitHub Pages project URL like username.github.io/repo-name/
export default defineConfig({
  plugins: [react()],
  base: './',
})
