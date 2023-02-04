import { Component } from 'react';
import css from './TodoListItem.module.css';

export default class TodoListItem extends Component {
  state = {
    done: false,
    important: false,
  };

  handleMarkCompleted = () => {
    this.setState(({ done }) => ({
      done: !done,
    }));
  };

  handleMarkImportant = () => {
    this.setState(({ important }) => ({
      important: !important,
    }));
  };

  render() {
    const { label, onDelete } = this.props;
    const { done, important } = this.state;

    return (
      <>
        <span
          className={`${done ? css.todoListItemLabelDone : css.todoListItemLabel} ${
            important ? css.todoListItemLabelImportant : css.todoListItemLabel
          }`}
          onClick={this.handleMarkCompleted}
        >
          {label}
        </span>
        <div>
          <button className={css.todoListItemButton} type="button" onClick={onDelete}>
            delete
          </button>
          <button
            className={css.todoListItemButton}
            type="button"
            onClick={this.handleMarkImportant}
          >
            important
          </button>
        </div>
      </>
    );
  }
}
