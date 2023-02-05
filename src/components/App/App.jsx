import { Component } from 'react';
import { nanoid } from 'nanoid';

import AppHeader from '../AppHeader';
import TodoList from '../TodoList';
import AddItemForm from '../AddItemForm';
import SearchPanel from '../SearchPanel';
import TaskFilter from '../TaskFilter';

export default class App extends Component {
  state = {
    todoData: [
      this.createItem('Learn React'),
      this.createItem('Create App'),
      this.createItem('Find Job'),
    ],

    query: '',
    status: 'all', // all, active, completed
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

  handleFilterChange = e => {
    this.setState({
      status: e.target.value,
    });
  };

  handleTaskFilter() {
    const { status, todoData } = this.state;
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
  }

  render() {
    const { todoData, query, status } = this.state;

    const completedQuantity = todoData.filter(el => el.completed).length;
    const todoQuantity = todoData.length - completedQuantity;

    const filteredTodo = this.handleTaskFilter();

    const normalizedQuery = query.toLocaleLowerCase();
    const searchedItems = filteredTodo.filter(el =>
      el.task.toLowerCase().includes(normalizedQuery)
    );

    return (
      <div className="todo-app">
        <AppHeader todo={todoQuantity} completed={completedQuantity} />
        <div className="top-panel">
          <SearchPanel onSearchChange={this.handleSearch} />
          <TaskFilter status={this.state.status} handleFilterChange={this.handleFilterChange} />
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
