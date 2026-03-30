import { createRoot } from 'react-dom/client';

import { App } from './App.tsx';
import { rootStore } from './store/RootStore';
import { StoreContext } from './store/StoreContext';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StoreContext.Provider value={rootStore}>
    <App />
  </StoreContext.Provider>,
);
