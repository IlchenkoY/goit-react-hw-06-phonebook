import shortid from 'shortid';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addcontact } from '../../redux/contactsSlice';
import { contactsSelector } from '../../redux/selectors';
import { Button } from '../ContactListItem/ContactListItem.styled';
import { Form, Input } from './ContactForm.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(contactsSelector);

  const dispatch = useDispatch();

  const formHandler = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;

      default:
        return;
    }
  };

  const submitHandler = e => {
    e.preventDefault();

    if (
      contacts.find(
        contactsEl => contactsEl.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(
      addcontact({
        name,
        number,
        id: shortid.generate(),
      }),
    );
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={submitHandler}>
      <label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={formHandler}
          required
        />
      </label>
      <label>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={formHandler}
          required
        />
      </label>

      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export { ContactForm };
