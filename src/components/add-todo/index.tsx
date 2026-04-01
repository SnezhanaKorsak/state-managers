import { useState } from 'react';

import { useTodoStore } from '../../store/use-todo-store';

import styles from './index.module.css';

export const AddTodo = () => {
  const addTodo = useTodoStore((state) => state.addTodo);
  const [text, setText] = useState('');

  const onAddTodo = () => {
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <div className={styles.addTodoContainer}>
      <input
        className={styles.addTodoInput}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className={styles.addTodoButton} onClick={onAddTodo}>
        Add
      </button>
    </div>
  );
};
