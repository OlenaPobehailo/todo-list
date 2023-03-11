import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';
import css from './AppBar.module.css';

const AppBar = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  return (
    <header className={css.header}>
      <nav className={css.nav}>
        {!isLoggedIn && <Link to="/login">Log in</Link>}
        {isLoggedIn && <Link to="/todos">Todo List</Link>}
      </nav>
      {isLoggedIn && <UserMenu />}
    </header>
  );
};

export default AppBar;
