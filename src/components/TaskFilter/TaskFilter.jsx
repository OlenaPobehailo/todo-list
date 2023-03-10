import { useDispatch } from 'react-redux';
import { setStatus } from '../../redux/statusSlice';
import css from './TaskFilter.module.css';

const TaskFilter = () => {

  const dispatch = useDispatch();

  const handleStatusChange = e => {
    dispatch(setStatus(e.target.value)); 
  };


  return (
    <div className={css.taskFilter}>
      <div className={css.radioToolbar}>
        <input
          type="radio"
          id="radio1"
          name="radio"
          value="all"
          // checked={status === 'all'}
          onChange={handleStatusChange} 
        />
        <label htmlFor="radio1">all</label>

        <input
          type="radio"
          id="radio2"
          name="radio"
          value="active"
          // checked={status === 'active'}
          onChange={handleStatusChange} 
        />
        <label htmlFor="radio2">active</label>

        <input
          type="radio"
          id="radio3"
          name="radio"
          value="completed"
          // checked={status === 'completed'}
          onChange={handleStatusChange} 
        />
        <label htmlFor="radio3">completed</label>
      </div>
    </div>
  );
};

export default TaskFilter;
