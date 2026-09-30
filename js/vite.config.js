const { resolve } = require('path');
const { defineConfig } = require('vite');

module.exports = defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'html/index.html'),
        cadastro: resolve(__dirname, 'html/cadastro.html'),
        projetos: resolve(__dirname, 'html/projetos.html'),
      },
    },
  },
});