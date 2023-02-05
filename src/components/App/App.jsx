import { Component } from 'react';
import { nanoid } from 'nanoid';

import AppHeader from '../AppHeader';
import TodoList from '../TodoList';
import AddItemForm from '../AddItemForm';
import SearchPanel from '../SearchPanel';
import TaskFilter from '../TaskFilter';
import css from './App.module.css';

export default class App extends Component {
  state = {
    todoData: [this.createItem('Find '), this.createItem('Learn '), this.createItem('Create ')],

    query: '',
    status: 'all', // all, active, completed
  };

  componentDidMount() {
    //console.log('componentDidMount');

    const todoData = localStorage.getItem('todoData');
    const parsedTodoData = JSON.parse(todoData);

    if (parsedTodoData) {
      this.setState({ todoData: parsedTodoData });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('componentDidUpdate');
    // console.log(prevState);
    // console.log(this.state);

    if (this.state.todoData !== prevState.todoData) {
      localStorage.setItem('todoData', JSON.stringify(this.state.todoData));
    }
  }

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
    if (!newItem.task) {
      return alert('Type the task, please');
    }
    //console.log(newItem.task);
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
    const { todoData, query } = this.state;

    const completedQuantity = todoData.filter(el => el.completed).length;
    const todoQuantity = todoData.length - completedQuantity;

    const filteredTodo = this.handleTaskFilter();

    const normalizedQuery = query.toLocaleLowerCase();
    const searchedItems = filteredTodo.filter(el =>
      el.task.toLowerCase().includes(normalizedQuery)
    );

    return (
      <div className={css.todoApp}>
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
