import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import * as path from 'path'
import { defineConfig } from 'vite'

import { generateScopedName } from './src/utilities/build/build'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    envDir: './env',
    publicDir: 'src/public',

    resolve: {
        alias: {
            '@app': path.resolve(__dirname, 'src'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@utilities': path.resolve(__dirname, 'src/utilities'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@containers': path.resolve(__dirname, 'src/containers'),
            '@constants': path.resolve(__dirname, 'src/constants.ts'),
        },
    },

    css: {
        postcss: {
            plugins: [autoprefixer()],
        },
        modules: {
            generateScopedName,
        },
    },
})
