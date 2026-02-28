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
        cafeLp: resolve(import.meta.dirname, 'works/cafe-lp/index.html'),
        corporateTop: resolve(import.meta.dirname, 'works/corporate/index.html'),
        corporateService: resolve(import.meta.dirname, 'works/corporate/service.html'),
        corporateWorks: resolve(import.meta.dirname, 'works/corporate/works.html'),
        corporateCompany: resolve(import.meta.dirname, 'works/corporate/company.html'),
      },
    },
  },
});
