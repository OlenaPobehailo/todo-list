import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/todoSlice';
import css from './AddItemForm.module.css';

const AddItemForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleChange = e => {
    if (e.target.value.length > 40) {
      return alert('task description should not be longer than 40 characters');
    }
    setText(e.target.value);
    console.log(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: nanoid(),
      label: text,
    };
    dispatch(addItem(newItem));
    setText('');
  };

  return (
    <form className={css.addItemForm} onSubmit={handleFormSubmit}>
      <input
        type="text"
        className={css.input}
        placeholder="Type here the task"
        onChange={handleChange}
        value={text}
      />
      <button>Add</button>
    </form>
  );
};

export default AddItemForm;
