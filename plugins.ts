import StyleLintPlugin from 'vite-plugin-stylelint';
import EslintPlugin from 'vite-plugin-eslint';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import Unfonts from 'unplugin-fonts/vite';
import path from 'path';

export const styleLintPlugin = StyleLintPlugin({
  files: ['src/**/*.{vue,scss}'],
  fix: true,
  cache: false,
});

export const eslintPlugin = EslintPlugin({
  fix: true,
  cache: false,
});

export const svgIconsPlugin = createSvgIconsPlugin({
  iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
  symbolId: 'icon-[dir]-[name]',
  inject: 'body-first',
  customDomId: '__svg__icons__dom__',
});

export const fontsPlugin = Unfonts({
  google: {
    families: [
      {
        name: 'Roboto',
        styles: 'ital,wght@0,500;1,400',
      },
      {
        name: 'Montserrat',
      },
    ],
  },
});
