import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      title: 'Characters Explorer',
      welcomeMessage: 'Select a series to explore characters',
      loading: 'Loading...',
    },
  },
  es: {
    translation: {
      title: 'Explorador de Personajes',
      welcomeMessage: 'Selecciona una serie para explorar personajes',
      loading: 'Cargando...',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') || 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
