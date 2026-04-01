import { useEffect } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { AddTodo } from './components/add-todo';
import { Settings } from './components/settings';
import { TodoList } from './components/todo-list';
import { useAppStore } from './store/use-app-store';
import { useTodoStore } from './store/use-todo-store';

import styles from './App.module.css';

export const App = () => {
  const { theme, loadTheme } = useAppStore(
    useShallow((state) => ({ theme: state.theme, loadTheme: state.loadTheme })),
  );

  const loadTodos = useTodoStore((state) => state.loadTodos);

  useEffect(() => {
    loadTheme();
    loadTodos();
  }, [loadTheme, loadTodos]);

  return (
    <div className={`${styles.rootContainer} ${theme}`}>
      <div className={styles.wrapper}>
        <h1>Todo App</h1>

        <Settings />

        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
};
