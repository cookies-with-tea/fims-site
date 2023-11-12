import { StorageItemsEnum } from '@/enums/storageItemEnum';
import { ThemesEnum } from '@/enums/themesEnum';

export function useTheme(document: Document, localStorage: Storage) {
  const setThemeClass = (theme: ThemesEnum) => {
    document.documentElement.className = theme;
  };

  const loadTheme = () => {
    setThemeClass(getTheme());
  };

  const getTheme = (): ThemesEnum => {
    return (localStorage.getItem(StorageItemsEnum.THEME) || ThemesEnum.LIGHT) as ThemesEnum;
  };

  const setTheme = (theme: ThemesEnum) => {
    setThemeClass(theme);

    localStorage.setItem(StorageItemsEnum.THEME, theme);
  };

  return { setTheme, getTheme, loadTheme };
}
