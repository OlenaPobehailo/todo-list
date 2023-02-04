import { Component } from 'react';
import css from './AddItemForm.module.css';

export default class AddItemForm extends Component {
  render() {
    return (
      <form className={css.addItemForm}>
        <input type="text" className={css.input} placeholder="What needs to be done?" />
        <button type="button" onClick={() => this.props.onAdd('Hello')}>
          Add
        </button>
      </form>
    );
  }
}
