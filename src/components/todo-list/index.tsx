import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  filteredTodoSelector,
  todoLoadingSelector,
  todoSelector,
} from '../../store/todo/selectors';
import { fetchTodos } from '../../store/todo/thunk';
import { TodoItem } from './todo-items';

import styles from './index.module.css';

export const TodoList = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(todoSelector);
  const filteredTodos = useAppSelector(filteredTodoSelector);
  const loading = useAppSelector(todoLoadingSelector);

  useEffect(() => {
    if (todos.length === 0) {
      dispatch(fetchTodos());
    }
  }, [todos.length, dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.todoListContainer}>
      {filteredTodos.length > 0 ? (
        filteredTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <h2 className={styles.alert}>Add new task!</h2>
      )}
    </div>
  );
};
