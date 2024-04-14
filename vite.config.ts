import react from '@vitejs/plugin-react'
import path from 'path'
import { generateTypes } from 'typed-icon-template'
import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

const svgIconsConfig = createSvgIconsPlugin({
  iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
  symbolId: 'icon-[dir]-[name]',
  inject: 'body-first',
  customDomId: '__svg__icons__dom__',
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgIconsConfig,
    generateTypes({
      iconsPath: path.join(process.cwd(), 'src', 'assets', 'icons'),
      iconComponentPath: path.resolve(process.cwd(), 'src','ui', 'icon', 'types'),
      fileName: 'index.ts'
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@hooks': fileURLToPath(new URL('./src/hooks', import.meta.url)),
      '@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
      '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
      '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      '@scss': fileURLToPath(new URL('./src/scss', import.meta.url)),
      '@ui': fileURLToPath(new URL('./src/ui', import.meta.url)),
      '@providers': fileURLToPath(new URL('./src/providers', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
            @use './src/scss/_variables.scss' as *;
          `,
      },
    },
  },
})
