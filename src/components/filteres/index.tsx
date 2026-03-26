import { filters } from '../../constants';

import styles from './index.module.css';

export const Filters = () => {
  const filter = 'all';

  const onChangeFilter = () => {
    console.log('filter change');
  };

  return (
    <div className={styles.filtersContainer}>
      {filters.map((f) => (
        <button
          key={f}
          className={`${styles.filterButton} ${filter === f ? styles.active : ''}`}
          onClick={onChangeFilter}
        >
          {f}
        </button>
      ))}
    </div>
  );
};
