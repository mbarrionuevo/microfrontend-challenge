interface HarryPotter {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
}

export const getHarryPotterCharacters = async (): Promise<HarryPotter[]> => {
  try {
    const response = await fetch('https://hp-api.onrender.com/api/characters');
    if (!response.ok) {
      throw new Error('Failed to fetch Harry Potter characters');
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching Harry Potter characters:', error);
    throw error;
  }
};
