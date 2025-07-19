import styled from 'styled-components';

export const MainContainer = styled.div`
  min-height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

  &.main-container {
    display: flex;
    flex-direction: column;
  }
`;

export const ContentArea = styled.main`
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  height: 100%;

  &.content {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
