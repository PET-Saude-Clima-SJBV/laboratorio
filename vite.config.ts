import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  // no GitHub Pages o site fica em /laboratorio/; na sua máquina, na raiz
  base: process.env.GITHUB_PAGES ? '/laboratorio/' : '/',
});
