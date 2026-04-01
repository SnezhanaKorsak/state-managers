import { useEffect } from 'react';
import { useAtomValue, useSetAtom } from 'jotai';

import { filterAtom } from '../../atoms/app';
import { loadingAtom, loadTodosAtom, todosAtom } from '../../atoms/todos';
import { TodoItem } from './todo-items';

import styles from './index.module.css';

export const TodoList = () => {
  const loadTodos = useSetAtom(loadTodosAtom);
  const todos = useAtomValue(todosAtom);
  const loading = useAtomValue(loadingAtom);
  const filter = useAtomValue(filterAtom);

  useEffect(() => {
    loadTodos();
  }, [loadTodos]);

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
