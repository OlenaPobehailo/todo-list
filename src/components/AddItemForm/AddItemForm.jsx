import { useState } from 'react';
import css from './AddItemForm.module.css';
import PropTypes from 'prop-types';

const AddItemForm = ({ onAdd }) => {
  const [task, setTask] = useState('');

  const handleChange = e => {
    if (e.target.value.length > 40) {
      return alert('task description should not be longer than 40 characters');
    }
    setTask(e.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    onAdd(task);
    setTask('');
  };

  return (
    <form className={css.addItemForm} onSubmit={onFormSubmit}>
      <input
        type="text"
        className={css.input}
        placeholder="Type here the task"
        onChange={handleChange}
        value={task}
      />
      <button>Add</button>
    </form>
  );
};
export default AddItemForm;

AddItemForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
