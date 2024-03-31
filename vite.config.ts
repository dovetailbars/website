import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    root: "./",
    server: {
        port: 8080,
        strictPort: true,
        host: true
    },
    build: {
        outDir: "./dist",
        sourcemap: true,
        emptyOutDir: true
    },
    plugins: [react()]
})
