import CharacterList from './CharacterList';
import { useEffect } from 'react';
import i18n from './lang/i18n';

function App({ language }: { language?: string }) {
  useEffect(() => {
    if (language && i18n.language !== language) {
      i18n.changeLanguage(language);
    }
  }, [language]);

  return <CharacterList />;
}

export default App;
