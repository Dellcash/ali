import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { transformerCompileClass } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Unocss({
    transformers: [
      transformerCompileClass()
    ]
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
