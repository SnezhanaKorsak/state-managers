import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { appThemeSelector } from '../../store/app/selectors';
import { toggleTheme } from '../../store/app/slice';

import styles from './index.module.css';

export const ThemeToggle = () => {
  const dispatch = useAppDispatch();

  const theme = useAppSelector(appThemeSelector);

  const onChangeTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <button className={styles.themeToggleButton} onClick={onChangeTheme}>
      {theme === 'light' ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
};
