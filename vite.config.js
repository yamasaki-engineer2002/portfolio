import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  base: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        // works ページ追加時にここにエントリーを追加
        // cafeLp: resolve(import.meta.dirname, 'works/cafe-lp/index.html'),
      },
    },
  },
});
