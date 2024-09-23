import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/main'),
      name: 'z-ui',
      formats: ['umd'],
    },
  },
  plugins: [svelte()],
});
