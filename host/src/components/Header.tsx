import { getLanguage, setLanguage } from '../utils';
import { APP_TYPES } from '../constants/appTypes';
import type { AppType } from '../constants/appTypes';
import {
  Header,
  HeaderTitle,
  HeaderNav,
  HeaderNavButton,
  HeaderSelect,
  HeaderOption,
} from './Header.styled';
import { useTranslation } from 'react-i18next';

const HeaderComponent = ({
  setSelectedApp,
  selectedApp,
}: {
  setSelectedApp: (app: string) => void;
  selectedApp?: AppType;
}) => {
  const { t } = useTranslation();
  const language = getLanguage();

  return (
    <Header>
      <HeaderTitle>{t('title')}</HeaderTitle>
      <HeaderNav role="navigation" aria-label="App selection">
        <HeaderNavButton
          onClick={() => setSelectedApp(APP_TYPES.RICK_AND_MORTY)}
          className={selectedApp === APP_TYPES.RICK_AND_MORTY ? 'active' : ''}
          aria-label="Switch to Rick and Morty characters"
        >
          Rick & Morty
        </HeaderNavButton>
        <HeaderNavButton
          onClick={() => setSelectedApp(APP_TYPES.HARRY_POTTER)}
          className={selectedApp === APP_TYPES.HARRY_POTTER ? 'active' : ''}
          aria-label="Switch to Harry Potter characters"
        >
          Harry Potter
        </HeaderNavButton>
      </HeaderNav>
      <HeaderSelect
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        aria-label="Select language"
      >
        <HeaderOption value="en">EN</HeaderOption>
        <HeaderOption value="es">ES</HeaderOption>
      </HeaderSelect>
    </Header>
  );
};

export default HeaderComponent;
