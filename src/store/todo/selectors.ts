import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '..';
import { appFilterSelector } from '../app/selectors';

import type { Todo } from '../../types';

export const todoSelector = (state: RootState) => state.todo.data;

export const filteredTodoSelector = createSelector(
  [todoSelector, appFilterSelector],
  (todoList, filter): Todo[] => {
    if (filter === 'active') {
      return todoList.filter((t) => !t.completed);
    }

    if (filter === 'completed') {
      return todoList.filter((t) => t.completed);
    }

    return todoList;
  },
);

export const todoLoadingSelector = (state: RootState) => state.todo.loading;
