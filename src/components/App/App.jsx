import AppHeader from '../AppHeader';
import TodoList from '../TodoList';
import AddItemForm from '../AddItemForm';
import SearchPanel from '../SearchPanel';
import TaskFilter from '../TaskFilter';
import css from './App.module.css';
import { useSelector } from 'react-redux';

export default function App() {
  const todoItems = useSelector(state => state.todo.todoItems);

  return (
    <div className={css.todoApp}>
      <AppHeader />

      <div className="top-panel">
        <SearchPanel />
        <TaskFilter />
      </div>

      <AddItemForm />

      <TodoList todos={todoItems} />
    </div>
  );
}
