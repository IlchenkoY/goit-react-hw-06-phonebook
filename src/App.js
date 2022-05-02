import { useSelector } from 'react-redux';
import { filteredContactsSelector, contactsSelector } from './redux/selectors';
import { ContactForm } from './components/ContactForm/ContactForm';
import { ContactList } from './components/Contactlist/ContactList';
import { Filter } from './components/Filter/Filter';
import { Container } from './components/Container/Container';

const App = () => {
  const contacts = useSelector(contactsSelector);
  const filteredContacts = useSelector(filteredContactsSelector);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length > 0 ? <Filter /> : <p>You have no contacts yet</p>}
      {filteredContacts.length > 0 && <ContactList />}
    </Container>
  );
};

export { App };
