import { observer } from 'mobx-react-lite';

import { filters } from '../../constants';
import { useStore } from '../../store/StoreContext';

import type { Filter } from '../../types';

import styles from './index.module.css';

export const Filters = observer(() => {
  const { appStore } = useStore();

  const filter = appStore.filter;

  const onChangeFilter = (filter: Filter) => {
    appStore.setFilter(filter);
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
});
