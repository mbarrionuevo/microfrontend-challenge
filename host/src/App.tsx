import { lazy, Suspense, useState } from 'react';
import { ContentArea, MainContainer } from './components/styled-components';
import Header from './components/Header';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

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
  const [selectedApp, setSelectedApp] = useState<
    'rick-and-morty' | 'harry-potter' | undefined
  >();
  const { t, i18n } = useTranslation();

  return (
    <MainContainer>
      <Header
        setSelectedApp={(app: string) =>
          setSelectedApp(app as 'rick-and-morty' | 'harry-potter')
        }
        selectedApp={selectedApp}
      />
      <ContentArea>
        <Suspense fallback={<div>Loading...</div>}>
          {selectedApp === 'rick-and-morty' && (
            <RickAndMorty language={i18n.language} />
          )}
          {selectedApp === 'harry-potter' && (
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
