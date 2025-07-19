import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import '@testing-library/jest-dom';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        character: 'Character',
      };
      return translations[key] || key;
    },
  }),
}));

vi.mock('./hooks/useGetCharacters', () => ({
  useGetCharacters: vi.fn(),
}));

import { useGetCharacters } from './hooks/useGetCharacters';
import CharacterList from './CharacterList';

describe('CharacterList', () => {
  const mockUseGetCharacters = useGetCharacters as any;

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders loading skeleton when isLoading is true', () => {
    mockUseGetCharacters.mockReturnValue({
      data: [],
      isLoading: true,
    });

    render(<CharacterList />);

    // Should show skeleton loading state
    expect(screen.getByTestId('character-skeleton')).toBeInTheDocument();
  });

  it('renders characters when data is loaded', async () => {
    const mockCharacters = [
      {
        id: 1,
        name: 'Rick Sanchez',
        image: 'rick.jpg',
      },
      {
        id: 2,
        name: 'Morty Smith',
        image: 'morty.jpg',
      },
    ];

    mockUseGetCharacters.mockReturnValue({
      data: mockCharacters,
      isLoading: false,
    });

    render(<CharacterList />);

    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
    expect(screen.getByText('Morty Smith')).toBeInTheDocument();
  });

  it('renders character images with correct attributes', async () => {
    const mockCharacters = [
      {
        id: 1,
        name: 'Rick Sanchez',
        image: 'rick.jpg',
      },
    ];

    mockUseGetCharacters.mockReturnValue({
      data: mockCharacters,
      isLoading: false,
    });

    render(<CharacterList />);

    const characterImage = screen.getByAltText('Rick Sanchez');
    expect(characterImage).toBeInTheDocument();
    expect(characterImage).toHaveAttribute('src', 'rick.jpg');
    expect(characterImage).toHaveAttribute('width', '150');
    expect(characterImage).toHaveAttribute('height', '150');
    expect(characterImage).toHaveAttribute('loading', 'lazy');
  });

  it('renders character information correctly', async () => {
    const mockCharacters = [
      {
        id: 1,
        name: 'Rick Sanchez',
        image: 'rick.jpg',
      },
    ];

    mockUseGetCharacters.mockReturnValue({
      data: mockCharacters,
      isLoading: false,
    });

    render(<CharacterList />);

    expect(screen.getByText('Character:')).toBeInTheDocument();
    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
  });

  it('renders multiple characters correctly', async () => {
    const mockCharacters = [
      {
        id: 1,
        name: 'Rick Sanchez',
        image: 'rick.jpg',
      },
      {
        id: 2,
        name: 'Morty Smith',
        image: 'morty.jpg',
      },
      {
        id: 3,
        name: 'Summer Smith',
        image: 'summer.jpg',
      },
    ];

    mockUseGetCharacters.mockReturnValue({
      data: mockCharacters,
      isLoading: false,
    });

    render(<CharacterList />);

    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
    expect(screen.getByText('Morty Smith')).toBeInTheDocument();
    expect(screen.getByText('Summer Smith')).toBeInTheDocument();
  });

  it('renders empty state when no characters are available', async () => {
    mockUseGetCharacters.mockReturnValue({
      data: [],
      isLoading: false,
    });

    render(<CharacterList />);

    // Should render the container but no character cards
    expect(screen.getByTestId('character-list-container')).toBeInTheDocument();
  });

  it('applies correct CSS classes to container', async () => {
    const mockCharacters = [
      {
        id: 1,
        name: 'Rick Sanchez',
        image: 'rick.jpg',
      },
    ];

    mockUseGetCharacters.mockReturnValue({
      data: mockCharacters,
      isLoading: false,
    });

    render(<CharacterList />);

    const container = screen.getByTestId('character-list-container');
    expect(container).toHaveClass('character-grid');
    expect(container).toHaveClass('character-grid--rick-morty');
  });

  it('renders character cards with correct structure', async () => {
    const mockCharacters = [
      {
        id: 1,
        name: 'Rick Sanchez',
        image: 'rick.jpg',
      },
    ];

    mockUseGetCharacters.mockReturnValue({
      data: mockCharacters,
      isLoading: false,
    });

    render(<CharacterList />);

    const characterCard = screen.getByTestId('character-card-1');
    expect(characterCard).toBeInTheDocument();

    // Check for image and text elements
    expect(screen.getByAltText('Rick Sanchez')).toBeInTheDocument();
    expect(screen.getByText('Character:')).toBeInTheDocument();
    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
  });
});
