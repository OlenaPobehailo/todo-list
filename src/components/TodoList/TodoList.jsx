import TodoListItem from '../TodoListItem/TodoListItem';
import css from './TodoList.module.css';

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map(item => {
        const { id, ...restProps } = item;

        return (
          <li key={id} className={css.listItem}>
            <TodoListItem {...restProps} />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
