import { useAtom } from 'jotai';

import { filterAtom } from '../../atoms/app';
import { filters } from '../../constants';

import type { Filter } from '../../types';

import styles from './index.module.css';

export const Filters = () => {
  const [filter, setFilter] = useAtom(filterAtom);

  const onChangeFilter = (newFilter: Filter) => {
    setFilter(() => newFilter);
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
