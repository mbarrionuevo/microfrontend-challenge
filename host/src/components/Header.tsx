import { getLanguage, setLanguage } from '../utils';
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
  selectedApp?: 'rick-and-morty' | 'harry-potter';
}) => {
  const { t } = useTranslation();
  const language = getLanguage();

  return (
    <Header>
      <HeaderTitle>{t('title')}</HeaderTitle>
      <HeaderNav>
        <HeaderNavButton
          onClick={() => setSelectedApp('rick-and-morty')}
          className={selectedApp === 'rick-and-morty' ? 'active' : ''}
        >
          Rick & Morty
        </HeaderNavButton>
        <HeaderNavButton
          onClick={() => setSelectedApp('harry-potter')}
          className={selectedApp === 'harry-potter' ? 'active' : ''}
        >
          Harry Potter
        </HeaderNavButton>
      </HeaderNav>
      <HeaderSelect
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <HeaderOption value="en">EN</HeaderOption>
        <HeaderOption value="es">ES</HeaderOption>
      </HeaderSelect>
    </Header>
  );
};

export default HeaderComponent;
