import css from './TodoListItem.module.css';

const TodoListItem = ({ label, onDelete, onToggleImportant, onToggleCompleted, important, completed }) => {
  return (
    <>
      <span
        className={`${completed ? css.todoListItemLabelCompleted : css.todoListItemLabel} ${
          important ? css.todoListItemLabelImportant : css.todoListItemLabel
        }`}
        onClick={onToggleCompleted}
      >
        {label}
      </span>
      <div>
        <button className={css.todoListItemButton} type="button" onClick={onDelete}>
          delete
        </button>
        <button className={css.todoListItemButton} type="button" onClick={onToggleImportant}>
          important
        </button>
      </div>
    </>
  );
};

export default TodoListItem;
