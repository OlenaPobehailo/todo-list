import React from 'react';
import { useSelector } from 'react-redux';
import AddItemForm from '../components/AddItemForm';
import AppHeader from '../components/TodoHeader';
import SearchPanel from '../components/SearchPanel';
import TaskFilter from '../components/TaskFilter';
import TodoList from '../components/TodoList';
import { useLogOutRedirect } from '../hooks/useLogOutRedirect';

export const TodoPage = () => {
  useLogOutRedirect();

  const todoItems = useSelector(state => state.todo.todoItems);

  return (
    <div>
      <AppHeader />

      <div className="top-panel">
        <SearchPanel />
        <TaskFilter />
      </div>

      <AddItemForm />

      <TodoList todos={todoItems} />
    </div>
  );
};
