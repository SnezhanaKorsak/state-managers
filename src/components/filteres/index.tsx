import { filters } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { appFilterSelector } from '../../store/app/selectors';
import { setFilter } from '../../store/app/slice';

import type { Filter } from '../../types';

import styles from './index.module.css';

export const Filters = () => {
  const dispatch = useAppDispatch();

  const filter = useAppSelector(appFilterSelector);

  const onChangeFilter = (filterName: Filter) => {
    dispatch(setFilter(filterName));
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
