import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { fetchTodos } from './thunk';

import type { Todo } from '../../types';

interface TodoState {
  data: Todo[];
  loading: boolean;
}

const initialState: TodoState = {
  data: [],
  loading: false,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      if (!action.payload.trim()) return;

      state.data.push({
        id: String(Date.now()),
        title: action.payload,
        completed: false,
      });
    },
    toggleTodo(state, action: PayloadAction<string>) {
      const todo = state.data.find((t) => t.id === action.payload);

      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchTodos.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { addTodo, toggleTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
