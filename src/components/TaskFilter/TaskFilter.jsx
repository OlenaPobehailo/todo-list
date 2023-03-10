import { useDispatch } from 'react-redux';
import { setStatus } from '../../redux/statusSlice';
import css from './TaskFilter.module.css';

const statusFilters = [
  { label: 'All', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Completed', value: 'completed' },
];

const TaskFilter = () => {
  const dispatch = useDispatch();

  const handleStatusChange = e => {
    dispatch(setStatus(e.target.value));
  };

  return (
    <div className={css.taskFilter}>
      <div className={css.radioToolbar}>
        {statusFilters.map(item => (
          <label key={item.value} className={css.radioLabel}>
            <input
              type="radio"
              name="statusFilter"
              value={item.value}
              onChange={handleStatusChange}
            />
            {item.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default TaskFilter;
