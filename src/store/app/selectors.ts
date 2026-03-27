import type { RootState } from '..';

export const appThemeSelector = (state: RootState) => state.app.theme;

export const appFilterSelector = (state: RootState) => state.app.filter;
