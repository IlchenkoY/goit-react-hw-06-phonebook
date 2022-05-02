export const contactsSelector = state => {
  return state.contacts.items;
};

export const filterSelector = state => {
  return state.contacts.filter;
};

export const filteredContactsSelector = state => {
  const contacts = contactsSelector(state);
  const filter = filterSelector(state);
  return contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.includes(filter),
  );
};
