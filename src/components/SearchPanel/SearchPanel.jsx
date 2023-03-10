import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import css from './SearchPanel.module.css';

const SearchPanel = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <input
      className={css.searchInput}
      placeholder="Type here to search"
      onChange={handleFilterChange}
    />
  );
};

export default SearchPanel;
