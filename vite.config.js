import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// `base` est absolu en production (`/packeo-site/`) pour que BrowserRouter
// résolve correctement les routes sur GitHub Pages.
// En dev local, `/` reste racine.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/packeo-site/' : '/',
}))
