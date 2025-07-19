import i18n from '../lang/i18n';

export const getLanguage = () => localStorage.getItem('language') || 'en';

export const setLanguage = (lang: string) => {
  localStorage.setItem('language', lang);
  i18n.changeLanguage(lang);
};
