import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import presetUno from '@unocss/preset-uno'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),Unocss({
    presets: [
     presetUno()
   ]
   })],
})
