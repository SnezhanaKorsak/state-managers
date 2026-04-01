import { useShallow } from 'zustand/react/shallow';

import { filters } from '../../constants';
import { useAppStore } from '../../store/use-app-store';

import type { Filter } from '../../types';

import styles from './index.module.css';

export const Filters = () => {
  const { setFilter, filter } = useAppStore(
    useShallow((state) => ({
      filter: state.filter,
      setFilter: state.setFilter,
    })),
  );

  const onChangeFilter = (filter: Filter) => {
    setFilter(filter);
  };

  return (
    <div className={styles.filtersContainer}>
      {filters.map((f) => (
        <button
          key={f}
          className={`${styles.filterButton} ${filter === f ? styles.active : ''}`}
          onClick={() => onChangeFilter(f)}
        >
          {f}
        </button>
      ))}
    </div>
  );
};
