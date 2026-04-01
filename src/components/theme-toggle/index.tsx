import { useAtom } from 'jotai';

import { themeAtom } from '../../atoms/app';

import styles from './index.module.css';

export const ThemeToggle = () => {
  const [theme, setTheme] = useAtom(themeAtom);

  const onChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button className={styles.themeToggleButton} onClick={onChangeTheme}>
      {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
};
