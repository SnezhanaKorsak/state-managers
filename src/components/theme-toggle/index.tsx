import { useState } from 'react';

import styles from './index.module.css';

export const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  const onChangeTheme = () => {
    setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'));
  };

  return (
    <button className={styles.themeToggleButton} onClick={onChangeTheme}>
      {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
};
