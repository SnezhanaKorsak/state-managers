import { createAsyncThunk } from '@reduxjs/toolkit';

import type { Todo } from '../../types';

type ThunkApiConfig = { rejectValue: string };

export const fetchTodos = createAsyncThunk<Todo[], ThunkApiConfig>(
  'todo/loadTodos',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(
        'https://jsonplaceholder.typicode.com/todos?_limit=5',
      );
      return res.json();
    } catch (error) {
      return rejectWithValue(
        (error as Error).message || 'Something went wrong',
      );
    }
  },
);
