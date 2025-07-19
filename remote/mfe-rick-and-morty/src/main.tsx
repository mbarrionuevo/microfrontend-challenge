import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import CharacterList from './CharacterList';
import './index.css';

import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // Aquí puedes agregar tus traducciones
        welcome: 'Welcome to Rick and Morty',
      },
    },
    // Puedes agregar más idiomas aquí
  },
  lng: 'es',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <CharacterList />
    </I18nextProvider>
  </StrictMode>
);
