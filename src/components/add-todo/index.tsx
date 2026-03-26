import { useState } from 'react';

import styles from './index.module.css';

export const AddTodo = () => {
  const [text, setText] = useState('');

  const addTodo = () => {
    console.log(text);
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
