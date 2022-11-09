import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import css from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <label className={css.filter__label}>
      Find contacts by name
      <input
        className={css.filter__input}
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
      />
    </label>
  );
}
