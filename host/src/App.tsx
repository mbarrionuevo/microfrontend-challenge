import { lazy, Suspense, useState } from 'react';
import Header from './components/Header';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { ContentArea, MainContainer } from './components/layout';
import { APP_TYPES } from './constants/appTypes';
import type { AppType } from './constants/appTypes';

const RickAndMorty = lazy(() => import('RickAndMorty/CharacterList'));
const HarryPotter = lazy(() => import('HarryPotter/CharacterList'));

export const WelcomeMessage = styled.div`
  text-align: center;
  color: white;
  font-size: 1.5rem;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  backdrop-filter: blur(10px);

  &.welcome {
    margin: 2rem auto;
    max-width: 600px;
  }
`;

function App() {
  const [selectedApp, setSelectedApp] = useState<AppType | undefined>();
  const { t, i18n } = useTranslation();

  return (
    <MainContainer>
      <Header
        setSelectedApp={(app: string) => setSelectedApp(app as AppType)}
        selectedApp={selectedApp}
      />
      <ContentArea>
        <Suspense fallback={<div>Loading...</div>}>
          {selectedApp === APP_TYPES.RICK_AND_MORTY && (
            <RickAndMorty language={i18n.language} />
          )}
          {selectedApp === APP_TYPES.HARRY_POTTER && (
            <HarryPotter language={i18n.language} />
          )}
        </Suspense>
        {!selectedApp && (
          <WelcomeMessage>
            <h4 className="welcome">{t('welcomeMessage')}</h4>
          </WelcomeMessage>
        )}
      </ContentArea>
    </MainContainer>
  );
}

export default App;
