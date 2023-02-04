import css from './AppHeader.module.css';
const AppHeader = ({ todo, done }) => {
  return (
    <div className={css.appHeader}>
      <h1>Todo List</h1>
      <h2>
        {todo} to do, {done} done
      </h2>
    </div>
  );
};

export default AppHeader;