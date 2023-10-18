import {StorageItemsEnum} from '@/enums/storageItemEnum';
import {ThemesEnum} from '@/enums/themesEnum';

export function useTheme(document: Document, localStorage: Storage) {

  const setThemeClass = (theme: ThemesEnum | string) => {
    document.documentElement.className = theme;
  }
  const loadTheme = () => {
    setThemeClass(localStorage.getItem(StorageItemsEnum.THEME) || ThemesEnum.LIGHT);
  };

  const setTheme = (theme: ThemesEnum) => {
    setThemeClass(theme)

    localStorage.setItem(StorageItemsEnum.THEME, theme);
  };

  return {setTheme, loadTheme};
}

