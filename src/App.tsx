import { observer } from 'mobx-react-lite';

import { AddTodo } from './components/add-todo';
import { Settings } from './components/settings';
import { TodoList } from './components/todo-list';
import { useStore } from './store/StoreContext';

import styles from './App.module.css';

export const App = observer(() => {
  const { appStore } = useStore();

  const theme = appStore.theme;

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
});
