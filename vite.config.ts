import { defineConfig, loadEnv } from 'vite';

import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import { svgIconsPlugin, styleLintPlugin, eslintPlugin } from './plugins';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const env = loadEnv(mode, process.cwd(), '') as ImportMetaEnv;

  return {
    plugins: [vue(), styleLintPlugin, eslintPlugin, svgIconsPlugin],
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
