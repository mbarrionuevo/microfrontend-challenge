import { useEffect, useState } from 'react';
import { getHarryPotterCharacters } from '../services/harry-potter';

interface HarryPotterCharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
}

export const useGetCharacters = () => {
  const [characters, setCharacters] = useState<HarryPotterCharacter[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = async () => {
    try {
      setIsLoading(true);
      const characters = await getHarryPotterCharacters();
      setCharacters(characters);
    } catch (error) {
      console.error('Error fetching Harry Potter characters:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return { data: characters.slice(0, 19), isLoading };
};
