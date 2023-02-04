import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import Filter from '../Filter';

const App = () => {
  const todoData = [
    { label: 'Drink Tea', important: false, id: 'id-1' },
    { label: 'Learn React', important: true, id: 'id-2' },
    { label: 'Create App', important: false, id: 'id-3' },
  ];
  return (
    <div className="todo-app">
      <AppHeader todo={1} done={3} />
      <div className="top-panel">
        <SearchPanel />
        <Filter />
      </div>
      <TodoList todos={todoData} />
    </div>
  );
};

export default App;
