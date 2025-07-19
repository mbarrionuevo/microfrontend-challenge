import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import CharacterList from './CharacterList';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div style={{ maxHeight: '100%', overflowY: 'auto' }}>
      <CharacterList />
    </div>
  </StrictMode>
);
