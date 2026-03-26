import { Filters } from '../filteres';
import { ThemeToggle } from '../theme-toggle';

import styles from './index.module.css';

export const Settings = () => {
  return (
    <div className={styles.container}>
      <ThemeToggle />
      <Filters />
    </div>
  );
};
