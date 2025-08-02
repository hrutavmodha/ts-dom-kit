import { defineConfig } from 'vite'
import { resolve } from 'path'
export default defineConfig({
    esbuild: {
        jsx: 'automatic',
        jsxImportSource: resolve(__dirname, 'src'),
        jsxDev: true
    }
})