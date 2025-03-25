import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Neura/',
  build: {
    outDir: 'docs'  // Cambia de 'dist' a 'docs'
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});