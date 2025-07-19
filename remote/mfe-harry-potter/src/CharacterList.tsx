import styled from 'styled-components';
import { useGetCharacters } from './hooks/useGetCharacters';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from './lang/i18n';

const CharacterListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 1rem 0;
  height: 100%;
  overflow: auto;

  &.character-grid {
    &--rick-morty {
      background: rgba(0, 180, 216, 0.05);
      border-radius: 12px;
      padding: 2rem;
    }
`;

const CharacterCard = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CharacterImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 6px;
  object-fit: cover;
  object-position: center top;
  aspect-ratio: 1/1;
`;

const CharacterSkeleton = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 1rem 0;
  height: 100%;
  overflow: auto;
  background: rgba(0, 180, 216, 0.05);
  border-radius: 12px;
  padding: 2rem;
`;

const SkeletonCard = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SkeletonImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 6px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  margin-bottom: 1rem;

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

const SkeletonText = styled.div`
  width: 120px;
  height: 20px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 4px;

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

const CharacterText = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const SkeletonComponent = () => {
  return (
    <CharacterSkeleton>
      {Array.from({ length: 8 }).map((_, index) => (
        <SkeletonCard key={index}>
          <SkeletonImage />
          <SkeletonText />
        </SkeletonCard>
      ))}
    </CharacterSkeleton>
  );
};

export default function CharacterList({ language }: { language?: string }) {
  const { t } = useTranslation();
  useEffect(() => {
    if (language && i18n.language !== language) {
      i18n.changeLanguage(language);
    }
  }, [language]);

  const { data: characters, isLoading } = useGetCharacters();

  if (isLoading) {
    return <SkeletonComponent />;
  }

  return (
    <CharacterListContainer className="character-grid character-grid--rick-morty">
      {characters.map((character) => (
        <CharacterCard key={character.id}>
          <CharacterImage
            src={character.image}
            alt={character.name}
            width={150}
            height={150}
            loading="lazy"
          />
          <CharacterText>
            <p>
              {t('character')}: <strong>{character.name}</strong>
            </p>
          </CharacterText>
        </CharacterCard>
      ))}
    </CharacterListContainer>
  );
}
