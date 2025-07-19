import styled from 'styled-components';

export const Header = styled.header`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(15px);
  padding: 1rem 2rem;
  display: flex;
  position: sticky;
  top: 0;
  z-index: 100;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
  }
`;

export const HeaderTitle = styled.h1`
  color: #2d3748;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.25rem;
  }
`;

export const HeaderNav = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: row;
    width: auto;
    gap: 0.5rem;
  }
`;

export const HeaderNavButton = styled.button`
  padding: 0.375rem 1rem;
  border-radius: 6px;
  border: 2px solid #e2e8f0;
  background: #f8fafc;
  color: #2d3748;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  position: relative;

  &:hover,
  &:focus {
    border-color: #a0aec0;
    color: #22223b;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    z-index: 1;
  }

  &.rick-morty:hover {
    border-color: #00b4d8;
  }

  &.harry-potter:hover {
    border-color: #8b5a2b;
  }

  &.active {
    background: #667eea;
    color: white;
    border-color: #667eea;
    box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
  }

  &.active.rick-morty {
    background: #00b4d8;
    border-color: #00b4d8;
    box-shadow: 0 2px 8px rgba(0, 180, 216, 0.3);
  }

  &.active.harry-potter {
    background: #8b5a2b;
    border-color: #8b5a2b;
    box-shadow: 0 2px 8px rgba(139, 90, 43, 0.3);
  }

  @media (max-width: 768px) {
    padding: 0.25rem 0.75rem;
    font-size: 0.75rem;
    width: auto;
  }
`;

export const HeaderSelect = styled.select`
  border: 2px solid #e2e8f0;
  border-radius: 6px;
  padding: 0.25rem 0.75rem;
  font-size: 0.87rem;
  color: #2d3748;
  background: #fff;
  outline: none;
  transition: border-color 0.2s;
  box-shadow: none;
  margin-left: 0.5rem;
  cursor: pointer;

  &:hover,
  &:focus {
    border-color: #a0aec0;
  }

  @media (max-width: 768px) {
    padding: 0.2rem 0.5rem;
    font-size: 0.6rem;
    margin-left: 0.25rem;
  }
`;

export const HeaderOption = styled.option`
  color: #2d3748;
`;
