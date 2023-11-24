import { defineConfig, loadEnv } from 'vite';

import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import { fontsPlugin, svgIconsPlugin, eslintPlugin, styleLintPlugin } from './plugins';

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const env = loadEnv(mode, process.cwd(), '') as ImportMetaEnv;

  const isDevelopment = mode === 'development';

  return {
    plugins: [vue(), svgIconsPlugin, fontsPlugin, isDevelopment && eslintPlugin, isDevelopment && styleLintPlugin],
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
