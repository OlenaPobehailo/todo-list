import { useSelector } from 'react-redux';
import { selectCompletedItems, selectTodoItems } from '../../redux/todoSlice';
import css from './TodoHeader.module.css';

const AppHeader = () => {
  const todoItems = useSelector(selectTodoItems);
  const completedItems = useSelector(selectCompletedItems);

  return (
    <div className={css.todoHeader}>
      <h1>Todo List</h1>
      <h2>
        {todoItems.length} to do, {completedItems.length} completed
      </h2>
    </div>
  );
};

export default AppHeader;
