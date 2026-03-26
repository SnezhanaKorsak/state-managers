import type { Todo } from '../types';

export const filters = ['all', 'active', 'completed'];

export const testData: Todo[] = [
  {
    id: '1',
    title: 'Test 1',
    completed: true,
  },
  {
    id: '2',
    title: 'Test 2',
    completed: false,
  },
  {
    id: '3',
    title: 'Test 3',
    completed: false,
  },
];
