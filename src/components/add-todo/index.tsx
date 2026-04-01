import { useState } from 'react';
import { useSetAtom } from 'jotai';

import { addTodoAtom } from '../../atoms/todos';

import styles from './index.module.css';

export const AddTodo = () => {
  const addTodo = useSetAtom(addTodoAtom);

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
