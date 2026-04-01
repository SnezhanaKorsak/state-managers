import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

import { fetchTodos } from '../api';

import type { Todo } from '../types';

export const todosAtom = atomWithStorage<Todo[]>('todos', []);
export const loadingAtom = atom(false);
export const errorAtom = atom<string | null>(null);

export const loadTodosAtom = atom(null, async (get, set) => {
  if (get(todosAtom).length) return;

  set(loadingAtom, true);
  set(errorAtom, null);

  try {
    const data = await fetchTodos();
    set(todosAtom, data);
  } catch (e) {
    set(errorAtom, e instanceof Error ? e.message : 'Unknown error');
  } finally {
    set(loadingAtom, false);
  }
});

export const toggleTodoAtom = atom(null, (_, set, id: string) => {
  set(todosAtom, (prev) =>
    prev.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    ),
  );
});

export const addTodoAtom = atom(null, (_, set, title: string) => {
  set(todosAtom, (prev) => [
    ...prev,
    {
      id: String(Date.now()),
      title,
      completed: false,
    },
  ]);
});
