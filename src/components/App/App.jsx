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
      { label: 'Drink Tea', important: false, id: 'id-1' },
      { label: 'Learn React', important: true, id: 'id-2' },
      { label: 'Create App', important: false, id: 'id-3' },
    ],
  };

  deleteItem = id => {
    this.setState(({ todoData }) => ({
      todoData: todoData.filter(el => el.id !== id),
    }));
  };

  addItem = text => {
    console.log('added ', text);
    const newItem = {
      label: text,
      important: text,
      id: nanoid(),
    };

    this.setState(({ todoData }) => ({
      todoData: [...todoData, newItem],
    }));
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader todo={1} done={3} />
        <div className="top-panel">
          <SearchPanel />
          <Filter />
        </div>
        <TodoList todos={this.state.todoData} onDelete={this.deleteItem} />
        <AddItemForm onAdd={this.addItem} />
      </div>
    );
  }
}
