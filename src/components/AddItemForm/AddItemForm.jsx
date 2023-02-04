import { Component } from 'react';
import css from './AddItemForm.module.css';

export default class AddItemForm extends Component {
  render() {
    return (
      <div className={css.addItemForm}>
        <button onClick={() => this.props.onAdd('Hello')}>Add</button>
      </div>
    );
  }
}
