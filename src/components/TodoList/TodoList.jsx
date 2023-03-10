import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/filterSlice';
import { selectStatus } from '../../redux/statusSlice';

import { deleteItem, toggleCompleted, toggleImportant } from '../../redux/todoSlice';
import TodoListItem from '../TodoListItem/TodoListItem';
import css from './TodoList.module.css';

const TodoList = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);
  const status = useSelector(selectStatus);

  const todos = useSelector(state => state.todo.todoItems);

  const filteredTodos = filterTodo(todos, filter, status);

  const onDelete = id => {
    dispatch(deleteItem(id));
  };

  const onToggleImportant = id => {
    dispatch(toggleImportant(id));
  };

  const onToggleCompleted = id => {
    dispatch(toggleCompleted(id));
  };

  return (
    <ul>
      {filteredTodos.map(item => {
        return (
          <li key={item.id} className={css.listItem}>
            <TodoListItem
              label={item.label}
              onDelete={() => onDelete(item.id)}
              onToggleImportant={() => onToggleImportant(item.id)}
              onToggleCompleted={() => onToggleCompleted(item.id)}
              important={item.important}
              completed={item.completed}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;

const filterTodo = (todos, filter, status) => {
  return todos.filter(
    item =>
      item.label.toLowerCase().includes(filter.toLowerCase()) && // додаємо умову фільтрації за значенням радіо-кнопки
      (status === 'all' ||
        (status === 'active' && !item.completed) ||
        (status === 'completed' && item.completed))
  );
};
