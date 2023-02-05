import css from './SearchPanel.module.css';

const SearchPanel = ({ query, onSearchChange }) => {
  return (
    <input
      className={css.searchInput}
      placeholder="Type here to search"
      onChange={onSearchChange}
    />
  );
};

export default SearchPanel;
