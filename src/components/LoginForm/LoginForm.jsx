import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../../redux/userSlice';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form.elements.login.value);
    dispatch(logIn(form.elements.login.value));
    e.currentTarget.reset();
    navigate('/todos', { replace: true });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input className={css.input} type="text" name="login" />
      <button className={css.button} type="submit">
        Log in
      </button>
    </form>
  );
};

export default LoginForm;
