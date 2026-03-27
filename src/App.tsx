import { AddTodo } from './components/add-todo';
import { Settings } from './components/settings';
import { TodoList } from './components/todo-list';
import { useAppSelector } from './hooks/redux';
import { appThemeSelector } from './store/app/selectors';

import styles from './App.module.css';

export const App = () => {
  const theme = useAppSelector(appThemeSelector);

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
