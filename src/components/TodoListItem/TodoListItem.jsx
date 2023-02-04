import { Component } from 'react';
import css from './TodoListItem.module.css';

export default class TodoListItem extends Component {
  render() {
    const { label, important = false } = this.props;

    const style = {
      color: important ? 'blue' : 'black',
      fontWeight: important ? 'bold' : 'normal',
    };

    return (
      <>
        <span className={css.todoListItemLabel} style={style}>
          {label}
        </span>
        <div>
          <button className={css.todoListItemButton} type="button">
            delete
          </button>
          <button className={css.todoListItemButton} type="button">
            completed
          </button>
        </div>
      </>
    );
  }
}

