import { Component } from 'react';
import css from './AddItemForm.module.css';
import PropTypes from 'prop-types';
export default class AddItemForm extends Component {
  state = {
    task: '',
  };

  handleChange = e => {
    this.setState({
      task: e.target.value,
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onAdd(this.state.task);
    this.setState({
      task: '',
    });
  };

  render() {
    return (
      <form className={css.addItemForm} onSubmit={this.onFormSubmit}>
        <input
          type="text"
          className={css.input}
          placeholder="What needs to be done?"
          onChange={this.handleChange}
          value={this.state.task}
        />
        <button>Add</button>
      </form>
    );
  }
}

AddItemForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
