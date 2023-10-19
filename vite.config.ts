import EslintPlugin from 'vite-plugin-eslint';
import StyleLintPlugin from 'vite-plugin-stylelint';

import { defineConfig, loadEnv } from 'vite';

import vue from '@vitejs/plugin-vue';
import { URL, fileURLToPath } from 'node:url';

const styleLintConfig = StyleLintPlugin({
  files: ['src/**/*.{vue,scss}'],
  fix: true,
  cache: false,
});

const eslintConfig = EslintPlugin({
  fix: true,
  cache: false,
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const env = loadEnv(mode, process.cwd(), '') as ImportMetaEnv;

  return {
    plugins: [vue(), styleLintConfig, eslintConfig],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/styles/resources" as *;',
        },
      },
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  };
});
