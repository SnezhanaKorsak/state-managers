import { AddTodo } from './components/add-todo';
import { Settings } from './components/settings';
import { TodoList } from './components/todo-list';

import styles from './App.module.css';

export const App = () => {
  return (
    <div className={styles.rootContainer}>
      <div className={styles.wrapper}>
        <h1>Todo App</h1>

        <Settings />

        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
};
