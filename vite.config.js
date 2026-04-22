import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// `base` est défini en relatif pour que le site fonctionne aussi bien en local
// qu'une fois déployé dans un sous-chemin (ex. GitHub Pages /repo-name/).
export default defineConfig({
  plugins: [react()],
  base: './',
})
