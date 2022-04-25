import shortid from 'shortid';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter, deleteContact, addcontact } from './redux/contactsSlice';
import { ContactForm } from './components/ContactForm/ContactForm';
import { ContactList } from './components/Contactlist/ContactList';
import { Filter } from './components/Filter/Filter';
import { Container } from './components/Container/Container';

const App = () => {
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(localStorage.getItem('contacts')) ?? [],
  // );
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    if (
      contacts.find(
        contactsEl =>
          contactsEl.name.toLowerCase() === contact.name.toLowerCase(),
      )
    ) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    dispatch(
      addcontact({
        name,
        number,
        id: shortid.generate(),
      }),
    );
  };

  const changeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  const filteredContactsHandler = () => {
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter),
    );
  };

  const deleteContactHandler = id => {
    dispatch(deleteContact(id));
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        <Filter value={filter} onChange={changeFilter} />
      ) : (
        <p>You have no contacts yet</p>
      )}
      {filteredContactsHandler().length !== 0 && (
        <ContactList
          contacts={filteredContactsHandler()}
          onDelete={deleteContactHandler}
        />
      )}
    </Container>
  );
};

export { App };
