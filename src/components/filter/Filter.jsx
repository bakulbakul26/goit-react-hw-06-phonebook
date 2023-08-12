import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filtersSlices';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = ({ currentTarget: { value } }) => {
    const normalizedValue = value.toLowerCase().trim();
    dispatch(setFilter(normalizedValue));
  };

  return (
    <label>
      <input
        type="text"
        placeholder="Find contacts by Name"
        value={filter}
        onChange={handleChange}
      />
    </label>
  );
};
