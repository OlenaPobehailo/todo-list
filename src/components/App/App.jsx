import { Component } from 'react';
import { nanoid } from 'nanoid';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import Filter from '../Filter';
import AddItemForm from '../AddItemForm';

export default class App extends Component {
  state = {
    todoData: [
      this.createItem('Learn React'),
      this.createItem('Create App'),
      this.createItem('Find Job'),
    ],
  };

  createItem(label) {
    return { label, important: false, completed: false, id: nanoid() };
  }

  deleteItem = id => {
    this.setState(({ todoData }) => ({
      todoData: todoData.filter(el => el.id !== id),
    }));
  };

  addItem = text => {
    console.log('added ', text);
    const newItem = this.createItem(text);

    this.setState(({ todoData }) => ({
      todoData: [...todoData, newItem],
    }));
  };

  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important'),
      };
    });
  };

  onToggleCompleted = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'completed'),
      };
    });
  };

  toggleProperty(arr, id, name) {
    const idx = arr.findIndex(el => el.id === id);
    const prev = arr[idx];
    const current = { ...prev, [name]: !prev[name] };
    return [...arr.slice(0, idx), current, ...arr.slice(idx + 1)];
  }

  render() {
    const { todoData } = this.state;
    const completedQuantity = todoData.filter(el => el.completed).length;

    const todoQuantity = todoData.length - completedQuantity;

    return (
      <div className="todo-app">
        <AppHeader todo={todoQuantity} completed={completedQuantity} />
        <div className="top-panel">
          <SearchPanel />
          <Filter />
        </div>
        <AddItemForm onAdd={this.addItem} />

        <TodoList
          todos={todoData}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleCompleted={this.onToggleCompleted}
        />
      </div>
    );
  }
}
