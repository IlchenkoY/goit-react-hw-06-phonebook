import { useSelector, useDispatch } from 'react-redux';
import { filterSelector } from '../../redux/selectors';
import { setFilter } from '../../redux/contactsSlice';
import { Label, Input } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(filterSelector);

  const dispatch = useDispatch();
  return (
    <Label>
      Find contacts by name or number
      <Input
        type="text"
        name="filter"
        onChange={e => dispatch(setFilter(e.target.value))}
        value={filter}
      />
    </Label>
  );
};

export { Filter };
