import { useState } from 'react';

import { useAppDispatch } from '../../hooks/redux';
import { addTodo } from '../../store/todo/slice';

import styles from './index.module.css';

export const AddTodo = () => {
  const dispatch = useAppDispatch();

  const [text, setText] = useState('');

  const onAddTodo = () => {
    dispatch(addTodo(text));
    setText('');
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
