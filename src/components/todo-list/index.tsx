import { filters, testData } from '../../constants';
import { TodoItem } from './todo-items';

import styles from './index.module.css';

export const TodoList = () => {
  const todos = testData;
  const filter = filters[0];
  const loading = false;

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

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
};
