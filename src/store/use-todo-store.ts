import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { fetchTodos } from '../api';

import type { Todo } from '../types';

type State = {
  todos: Todo[];
  loading: boolean;
  error: string | null;
};

type Action = {
  loadTodos: () => void;
  toggleTodo: (id: string) => void;
  addTodo: (title: string) => void;
};

export const useTodoStore = create<State & Action>()(
  persist(
    (set, get) => ({
      todos: [],
      loading: false,
      error: null,

      loadTodos: async () => {
        if (get().todos.length) return;

        set({ loading: true, error: null });

        try {
          const data = await fetchTodos();
          set({ todos: data, loading: false });
        } catch (e) {
          set({
            error: e instanceof Error ? e.message : 'Unknown error',
            loading: false,
          });
        }
      },

      toggleTodo: (id) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo,
          ),
        })),

      addTodo: (title) =>
        set((state) => ({
          todos: [
            ...state.todos,
            {
              id: String(Date.now()),
              title,
              completed: false,
            },
          ],
        })),
    }),
    {
      name: 'todo-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ todos: state.todos }),
    },
  ),
);
