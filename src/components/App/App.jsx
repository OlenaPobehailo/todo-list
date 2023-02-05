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

    query: '',
    filter: 'active', // all, active, completed
  };

  createItem(task) {
    return { task, important: false, completed: false, id: nanoid() };
  }

  deleteItem = id => {
    this.setState(({ todoData }) => ({
      todoData: todoData.filter(el => el.id !== id),
    }));
  };

  addItem = text => {
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

  handleSearch = e => {
    this.setState({
      query: e.target.value,
    });
  };

  // handleFilter(items, filter) {
  //   switch (filter) {
  //     case 'all':
  //       return items;
  //     case 'active':
  //       return items.filter(item => !item.completed);
  //     case 'completed':
  //       return items.filter(item => item.completed);
  //     default:
  //       return items;
  //   }
  // }

  render() {
    const { todoData, query, filter } = this.state;

    const completedQuantity = todoData.filter(el => el.completed).length;
    const todoQuantity = todoData.length - completedQuantity;

    const normalizedQuery = query.toLocaleLowerCase();
    const searchedItems = todoData.filter(el => el.task.toLowerCase().includes(normalizedQuery));
    

    return (
      <div className="todo-app">
        <AppHeader todo={todoQuantity} completed={completedQuantity} />
        <div className="top-panel">
          <SearchPanel onSearchChange={this.handleSearch} />
          <Filter />
        </div>
        <AddItemForm onAdd={this.addItem} />

        <TodoList
          todos={searchedItems}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleCompleted={this.onToggleCompleted}
        />
      </div>
    );
  }
}
