import { useTodoStore } from '../../../store/use-todo-store';

import type { Todo } from '../../../types';

import styles from './index.module.css';

type Props = {
  todo: Todo;
};

export const TodoItem = ({ todo }: Props) => {
  const toggleTodo = useTodoStore((state) => state.toggleTodo);

  const onChangeTodoStatus = () => {
    toggleTodo(todo.id);
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
