import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

import type { Filter, Theme } from '../types';

export const themeAtom = atomWithStorage<Theme>('theme', 'light');

export const filterAtom = atom<Filter>('all');
