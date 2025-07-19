interface RickMortyCharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
}

export const fetchRickMortyCharacters = async (): Promise<
  RickMortyCharacter[]
> => {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    if (!response.ok) {
      throw new Error('Failed to fetch Rick and Morty characters');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching Rick and Morty characters:', error);
    throw error;
  }
};
