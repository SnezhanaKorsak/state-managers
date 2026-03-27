import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { Filter, Theme } from '../../types';

interface AppState {
  theme?: Theme;
  filter: Filter;
}

const initialState: AppState = {
  theme: (localStorage.getItem('theme') as Theme) || 'light',
  filter: 'all',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', state.theme);
    },
    setFilter(state, action: PayloadAction<Filter>) {
      state.filter = action.payload;
    },
  },
});

export const { toggleTheme, setFilter } = appSlice.actions;
export const appReducer = appSlice.reducer;
