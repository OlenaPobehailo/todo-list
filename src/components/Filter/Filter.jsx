import { Component } from 'react';
import css from './Filter.module.css';

export default class Filter extends Component {
  render() {
    return (
      <div className={css.buttonGroup}>
        <button type="button" className={css.filterButton}>
          All
        </button>
        <button type="button" className={css.filterButton}>
          Active
        </button>
        <button type="button" className={css.filterButton}>
          Done
        </button>
      </div>
    );
  }
}
