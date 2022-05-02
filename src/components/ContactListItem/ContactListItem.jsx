import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { Button } from './ContactListItem.styled';
import { ReactComponent as DeleteIcon } from '../../icons/1485477104-basket_78591.svg';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <>
      {name}: {number}
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        <DeleteIcon width="25" height="25" />
      </Button>
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export { ContactListItem };
