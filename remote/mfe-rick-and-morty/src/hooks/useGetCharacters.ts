import { useEffect } from 'react';
import { useState } from 'react';
import { fetchRickMortyCharacters } from '../services/rick-and-morty';

interface RickMortyCharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
}

export const useGetCharacters = () => {
  const [characters, setCharacters] = useState<RickMortyCharacter[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = async () => {
    try {
      setIsLoading(true);
      const characters = await fetchRickMortyCharacters();
      setCharacters(characters);
    } catch (error) {
      console.error('Error fetching Rick and Morty characters:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return { data: characters, isLoading };
};
