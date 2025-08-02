import { defineConfig } from 'vite'
import { resolve } from 'path'
export default defineConfig({
    esbuild: {
        jsx: 'automatic',
        jsxImportSource: resolve(__dirname, 'src', 'react'),
        jsxDev: true
    },
    resolve: {
        alias: {
            'src/react': resolve(__dirname, 'src', 'react')
        }
    }
})