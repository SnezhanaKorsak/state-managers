import { observer } from 'mobx-react-lite';

import { useStore } from '../../../store/StoreContext';

import type { Todo } from '../../../types';

import styles from './index.module.css';

type Props = {
  todo: Todo;
};

export const TodoItem = observer(({ todo }: Props) => {
  const { todoStore } = useStore();

  const onChangeTodoStatus = () => {
    todoStore.toggleTodo(todo.id);
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
});
