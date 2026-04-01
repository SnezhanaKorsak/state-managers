import { create } from 'zustand';

import type { Filter, Theme } from '../types';

type State = {
  theme: Theme;
  filter: Filter;
};

type Action = {
  setFilter: (filter: Filter) => void;
  toggleTheme: () => void;
  loadTheme: () => void;
};

export const useAppStore = create<State & Action>((set) => ({
  theme: 'light',
  filter: 'all',

  setFilter: (filter: Filter) => set(() => ({ filter })),

  toggleTheme: () =>
    set((state) => {
      const nextTheme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', nextTheme);

      return { theme: nextTheme };
    }),

  loadTheme: () =>
    set((state) => {
      const savedTheme = localStorage.getItem('theme') as Theme;

      return { theme: savedTheme ? savedTheme : state.theme };
    }),
}));
