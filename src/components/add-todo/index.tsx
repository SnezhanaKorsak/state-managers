import { useState } from 'react';

import { useStore } from '../../store/StoreContext';

import styles from './index.module.css';

export const AddTodo = () => {
  const { todoStore } = useStore();

  const [text, setText] = useState('');

  const addTodo = () => {
    if (!text.trim()) {
      return;
    }

    todoStore.addTodo(text);
    setText('');
  };

  return (
    <div className={styles.addTodoContainer}>
      <input
        className={styles.addTodoInput}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className={styles.addTodoButton} onClick={addTodo}>
        Add
      </button>
    </div>
  );
};
