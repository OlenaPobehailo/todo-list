import { Component } from 'react';
import css from './AddItemForm.module.css';
import PropTypes from 'prop-types';
export default class AddItemForm extends Component {
  state = {
    task: '',
  };

  handleChange = e => {
    if(e.target.value.length>40){
      return alert ('task description should not be longer than 40 characters')
    }
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
          placeholder="Type here the task"
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
