import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Site servi à la racine du domaine custom (https://packeo.ca/).
// `base: '/'` est utilisé en dev et en prod.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
