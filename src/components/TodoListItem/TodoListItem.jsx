import css from './TodoListItem.module.css';

const TodoListItem = ({
  label,
  onDelete,
  onToggleImportant,
  onToggleCompleted,
  important,
  completed,
}) => {
  return (
    <>
      <span
        className={`${completed ? css.todoListItemTaskCompleted : css.todoListItemTask} ${
          important ? css.todoListItemTaskImportant : css.todoListItemTask
        }`}
        onClick={onToggleCompleted}
      >
        {label}
      </span>
      <div>
        <button className={css.todoListItemButton} type="button" onClick={onDelete}>
          Delete
        </button>
        <button className={css.todoListItemButton} type="button" onClick={onToggleImportant}>
          Important
        </button>
      </div>
    </>
  );
};

export default TodoListItem;
