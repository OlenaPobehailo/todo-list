import css from './Filter.module.css';
const Filter = () => {
  return (
    <div className={css.buttonGroup}>
      <button type="button" className={css.filterButton}>
        All
      </button>
      <button type="button" className={css.filterButton}>
        Active
      </button>
      <button type="button" className={css.filterButton}>
        Done
      </button>
    </div>
  );
};

export default Filter;
