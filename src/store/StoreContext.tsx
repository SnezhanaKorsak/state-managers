import { createContext, useContext } from 'react';

import { type RootStore } from './RootStore';

export const StoreContext = createContext<RootStore | null>(null);

export const useStore = () => {
  const store = useContext(StoreContext);

  if (!store) {
    throw new Error('StoreContext not found');
  }

  return store;
};
