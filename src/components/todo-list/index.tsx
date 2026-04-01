import { useShallow } from 'zustand/react/shallow';

import { useAppStore } from '../../store/use-app-store';
import { useTodoStore } from '../../store/use-todo-store';
import { TodoItem } from './todo-items';

import styles from './index.module.css';

export const TodoList = () => {
  const { todos, loading } = useTodoStore(
    useShallow((state) => ({ todos: state.todos, loading: state.loading })),
  );

  const filter = useAppStore((state) => state.filter);

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
