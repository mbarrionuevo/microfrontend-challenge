import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      loading: 'Loading...',
      title: 'Rick & Morty Characters',
      character: 'Character',
    },
  },
  es: {
    translation: {
      loading: 'Cargando...',
      title: 'Personajes de Rick & Morty',
      character: 'Personaje',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
