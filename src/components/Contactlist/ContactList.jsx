import { useSelector } from 'react-redux';
import { filteredContactsSelector } from '../../redux/selectors';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { List, ListItem } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(filteredContactsSelector);
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <ContactListItem name={name} number={number} id={id} />
        </ListItem>
      ))}
    </List>
  );
};

export { ContactList };
