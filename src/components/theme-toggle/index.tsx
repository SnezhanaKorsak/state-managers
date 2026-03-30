import { observer } from 'mobx-react-lite';

import { useStore } from '../../store/StoreContext';

import styles from './index.module.css';

export const ThemeToggle = observer(() => {
  const { appStore } = useStore();

  const theme = appStore.theme;

  const onChangeTheme = () => {
    appStore.toggleTheme();
  };

  return (
    <button className={styles.themeToggleButton} onClick={onChangeTheme}>
      {theme === 'light' ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
});
