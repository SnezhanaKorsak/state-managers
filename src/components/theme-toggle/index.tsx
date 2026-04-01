import { useShallow } from 'zustand/react/shallow';

import { useAppStore } from '../../store/use-app-store';

import styles from './index.module.css';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useAppStore(
    useShallow((state) => ({
      theme: state.theme,
      toggleTheme: state.toggleTheme,
    })),
  );

  const onChangeTheme = () => {
    toggleTheme();
  };

  return (
    <button className={styles.themeToggleButton} onClick={onChangeTheme}>
      {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
};
