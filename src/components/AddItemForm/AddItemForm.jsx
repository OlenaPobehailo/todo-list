import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/todoSlice';
import checkTextLength from '../../utilits/checkTextLength';
import css from './AddItemForm.module.css';

const AddItemForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleChange = e => {
    const text = e.target.value;
    checkTextLength(text) && setText(e.target.value);

    console.log(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    const newItem = {
      id: nanoid(),
      label: text,
    };

    const trimmedText = text.trim();

    if (!trimmedText) {
      return alert('Please enter a task description.');
    }

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
