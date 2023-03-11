import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/userSlice';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const login = useSelector(state => state.user.login);
  console.log(login);

  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <div className={css.menu}>
      <span>Hello, {login}</span>
      <button type="button" className={css.button} onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
