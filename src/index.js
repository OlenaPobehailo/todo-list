import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppHeader from './components/AppHeader/AppHeader';
import SearchPanel from './components/SearchPanel/SearchPanel';
import TodoList from './components/TodoList/TodoList';
import Filter from './components/Filter/Filter';

const App = () => {
  const todoData = [
    { label: 'Drink Tea', important: false, id: 'id-1' },
    { label: 'Learn React', important: true, id: 'id-2' },
    { label: 'Create App', important: false, id: 'id-3' },
  ];
  return (
    <div className="todo-app">
      <AppHeader />
      <div className="top-panel">
        <SearchPanel />
        <Filter />
      </div>
      <TodoList todos={todoData} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
