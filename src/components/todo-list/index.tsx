import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { useStore } from '../../store/StoreContext';
import { TodoItem } from './todo-items';

import styles from './index.module.css';

export const TodoList = observer(() => {
  const { todoStore } = useStore();
  const filteredTodos = todoStore.filteredTodos;

  const loading = false;

  useEffect(() => {
    todoStore.loadTodos();
  }, [todoStore]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.todoListContainer}>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
});
