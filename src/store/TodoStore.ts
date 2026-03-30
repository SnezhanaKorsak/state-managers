import { makeAutoObservable, runInAction } from 'mobx';
import { isHydrated, makePersistable } from 'mobx-persist-store';

import { fetchTodos } from '../api';
import { RootStore } from './RootStore';

import type { Todo } from '../types';

export class TodoStore {
  rootStore: RootStore;
  todos: Todo[] = [];
  loading = false;
  error: string | null = null;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);

    makePersistable(this, {
      name: 'TodoStore',
      properties: ['todos'],
      storage: window.localStorage,
    });
  }

  async loadTodos() {
    if (!isHydrated(this)) {
      return; // ждём восстановления из localStorage
    }

    if (this.todos.length > 0) {
      return; // уже есть данные
    }

    this.loading = true;

    try {
      const data = await fetchTodos();

      runInAction(() => {
        this.todos = data;
      });
    } catch (error) {
      this.error = String(error);
    } finally {
      this.loading = false;
    }
  }

  addTodo(title: string) {
    this.todos.push({
      id: String(Date.now()),
      title,
      completed: false,
    });
  }

  toggleTodo(id: string) {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  get filteredTodos() {
    const filter = this.rootStore.appStore.filter;

    switch (filter) {
      case 'active':
        return this.todos.filter((t) => !t.completed);
      case 'completed':
        return this.todos.filter((t) => t.completed);
      default:
        return this.todos;
    }
  }
}
