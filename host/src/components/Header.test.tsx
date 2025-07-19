import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import Header from './Header';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        title: 'Characters Explorer',
      };
      return translations[key] || key;
    },
  }),
}));

vi.mock('../utils', () => ({
  getLanguage: vi.fn(() => 'en'),
  setLanguage: vi.fn(),
}));

describe('Header', () => {
  it('renders title', () => {
    const mockSetSelectedApp = vi.fn();
    render(<Header setSelectedApp={mockSetSelectedApp} />);
    expect(screen.getByText('Characters Explorer')).toBeInTheDocument();
  });

  it('renders navigation buttons', () => {
    const mockSetSelectedApp = vi.fn();
    render(<Header setSelectedApp={mockSetSelectedApp} />);
    expect(screen.getByText('Rick & Morty')).toBeInTheDocument();
    expect(screen.getByText('Harry Potter')).toBeInTheDocument();
  });

  it('calls setSelectedApp when Rick & Morty button is clicked', () => {
    const mockSetSelectedApp = vi.fn();
    render(<Header setSelectedApp={mockSetSelectedApp} />);
    const rickMortyButton = screen.getByText('Rick & Morty');
    fireEvent.click(rickMortyButton);
    expect(mockSetSelectedApp).toHaveBeenCalledWith('rick-and-morty');
  });

  it('calls setSelectedApp when Harry Potter button is clicked', () => {
    const mockSetSelectedApp = vi.fn();
    render(<Header setSelectedApp={mockSetSelectedApp} />);
    const harryPotterButton = screen.getByText('Harry Potter');
    fireEvent.click(harryPotterButton);
    expect(mockSetSelectedApp).toHaveBeenCalledWith('harry-potter');
  });

  it('renders language selector', () => {
    const mockSetSelectedApp = vi.fn();
    render(<Header setSelectedApp={mockSetSelectedApp} />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('shows current language in selector', () => {
    const mockSetSelectedApp = vi.fn();
    render(<Header setSelectedApp={mockSetSelectedApp} />);
    const select = screen.getByRole('combobox') as HTMLSelectElement;
    expect(select.value).toBe('en');
  });
});
