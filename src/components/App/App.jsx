import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import AppHeader from '../AppHeader';
import TodoList from '../TodoList';
import AddItemForm from '../AddItemForm';
import SearchPanel from '../SearchPanel';
import TaskFilter from '../TaskFilter';
import css from './App.module.css';

const INITIAL_TASKS = [
  { task: 'task 1', important: false, completed: false, id: nanoid() },
  { task: 'task 2', important: false, completed: false, id: nanoid() },
  { task: 'task 3', important: false, completed: false, id: nanoid() },
];

export default function App() {
  const [todoData, setTodoData] = useState(() => {
    const localData = JSON.parse(window.localStorage.getItem('todoData'));
    return localData && localData.length ? localData : INITIAL_TASKS;
  });
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    window.localStorage.setItem('todoData', JSON.stringify(todoData));
  }, [todoData]);

  const createItem = task => {
    return { task, important: false, completed: false, id: nanoid() };
  };

  const deleteItem = id => {
    setTodoData(todoData.filter(el => el.id !== id));
  };

  const addItem = text => {
    const newItem = createItem(text);
    if (!newItem.task) {
      return alert('Type the task, please');
    }
    setTodoData([...todoData, newItem]);
  };

  const onToggleImportant = id => {
    setTodoData(toggleProperty(todoData, id, 'important'));
  };

  const onToggleCompleted = id => {
    setTodoData(toggleProperty(todoData, id, 'completed'));
  };

  const toggleProperty = (arr, id, name) => {
    const idx = arr.findIndex(el => el.id === id);
    const prev = arr[idx];
    const current = { ...prev, [name]: !prev[name] };
    return [...arr.slice(0, idx), current, ...arr.slice(idx + 1)];
  };

  const handleSearch = e => {
    setQuery(e.target.value);
  };

  const handleFilterChange = e => {
    setStatus(e.target.value);
  };

  const handleTaskFilter = () => {
    switch (status) {
      case 'all':
        return todoData;
      case 'active':
        return todoData.filter(item => !item.completed);
      case 'completed':
        return todoData.filter(item => item.completed);
      default:
        return todoData;
    }
  };

  const completedQuantity = todoData.filter(el => el.completed).length;
  const todoQuantity = todoData.length - completedQuantity;
  const filteredTodo = handleTaskFilter();
  const normalizedQuery = query.toLocaleLowerCase();
  const searchedItems = filteredTodo.filter(el => el.task.toLowerCase().includes(normalizedQuery));

  return (
    <div className={css.todoApp}>
      <AppHeader todo={todoQuantity} completed={completedQuantity} />

      <div className="top-panel">
        <SearchPanel onSearchChange={handleSearch} />
        <TaskFilter status={status} handleFilterChange={handleFilterChange} />
      </div>

      <AddItemForm onAdd={addItem} />

      <TodoList
        todos={searchedItems}
        onDelete={deleteItem}
        onToggleImportant={onToggleImportant}
        onToggleCompleted={onToggleCompleted}
      />
    </div>
  );
}
