import ru from '@/i18n/ru.json';
import en from '@/i18n/en.json';
import { createI18n } from 'vue-i18n';

export const messages = {
  ru: ru,
  en: en,
};

export const defaultLocale = 'en';

export const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: 'en',
  messages,
});
