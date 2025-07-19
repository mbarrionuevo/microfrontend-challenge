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
  color: #1a202c;
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
  background: #ffffff;
  color: #1a202c;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  position: relative;

  &:hover,
  &:focus {
    border-color: #4a5568;
    color: #000000;
    background: #f7fafc;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
    z-index: 1;
  }

  &:focus {
    outline: 2px solid #3182ce;
    outline-offset: 2px;
  }

  &.rick-morty:hover {
    border-color: #00b4d8;
    background: #e6f7ff;
  }

  &.harry-potter:hover {
    border-color: #8b5a2b;
    background: #fdf2e9;
  }

  &.active {
    background: #4c51bf;
    color: white;
    border-color: #4c51bf;
    box-shadow: 0 2px 8px rgba(76, 81, 191, 0.4);
  }

  &.active.rick-morty {
    background: #0099cc;
    border-color: #0099cc;
    box-shadow: 0 2px 8px rgba(0, 153, 204, 0.4);
  }

  &.active.harry-potter {
    background: #7a4d1f;
    border-color: #7a4d1f;
    box-shadow: 0 2px 8px rgba(122, 77, 31, 0.4);
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
  color: #1a202c;
  background: #fff;
  outline: none;
  transition: border-color 0.2s;
  box-shadow: none;
  margin-left: 0.5rem;
  cursor: pointer;
  font-weight: 500;

  &:hover,
  &:focus {
    border-color: #4a5568;
    background: #f7fafc;
  }

  &:focus {
    outline: 2px solid #3182ce;
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    padding: 0.2rem 0.5rem;
    font-size: 0.6rem;
    margin-left: 0.25rem;
  }
`;

export const HeaderOption = styled.option`
  color: #1a202c;
  background: #ffffff;
`;
