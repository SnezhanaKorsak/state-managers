import { makeAutoObservable } from 'mobx';

import { RootStore } from './RootStore';

import type { Filter, Theme } from '../types';

export class AppStore {
  rootStore: RootStore;
  filter: Filter = 'all';
  theme: Theme = 'light';

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);

    this.loadTheme();
  }

  setFilter(filter: Filter) {
    this.filter = filter;
  }

  toggleTheme() {
    const nextTheme = this.theme === 'light' ? 'dark' : 'light';
    this.theme = nextTheme;
    localStorage.setItem('theme', nextTheme);
  }

  loadTheme() {
    const savedTheme = localStorage.getItem('theme') as Theme;

    if (savedTheme) {
      this.theme = savedTheme;
    }
  }
}
