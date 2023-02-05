import css from './TaskFilter.module.css';
import PropTypes from 'prop-types';

const TaskFilter = ({ status, handleFilterChange }) => {
  return (
    <div className={css.taskFilter}>
      <div className={css.radioToolbar}>
        <input
          type="radio"
          id="radio1"
          name="radio"
          value="all"
          checked={status === 'all'}
          onChange={handleFilterChange}
        />
        <label htmlFor="radio1">all</label>

        <input
          type="radio"
          id="radio2"
          name="radio"
          value="active"
          checked={status === 'active'}
          onChange={handleFilterChange}
        />
        <label htmlFor="radio2">active</label>

        <input
          type="radio"
          id="radio3"
          name="radio"
          value="completed"
          checked={status === 'completed'}
          onChange={handleFilterChange}
        />
        <label htmlFor="radio3">completed</label>
      </div>
    </div>
  );
};
export default TaskFilter;
