import { useAppDispatch } from '../../../hooks/redux';
import { toggleTodo } from '../../../store/todo/slice';

import type { Todo } from '../../../types';

import styles from './index.module.css';

type Props = {
  todo: Todo;
};

export const TodoItem = ({ todo }: Props) => {
  const dispatch = useAppDispatch();

  const onChangeTodoStatus = () => {
    dispatch(toggleTodo(todo.id));
  };

  return (
    <div className={styles.todoItem}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onChangeTodoStatus}
      />
      <span
        className={`${styles.todoText} ${todo.completed ? styles.completed : ''}`}
      >
        {todo.title}
      </span>
    </div>
  );
};
