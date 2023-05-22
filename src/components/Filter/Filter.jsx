import { useDispatch, useSelector } from 'react-redux';
import { setFilter, getFilter } from '../Redux/Slice/slice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label>
      <input
        type="text"
        name="filter"
        value={filter}
        className={css.searchInput}
        onChange={onChangeFilter}
        placeholder="Find contacts by name"
      />
    </label>
  );
};
