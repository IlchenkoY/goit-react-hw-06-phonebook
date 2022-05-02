import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addcontact(state, action) {
      state.items.push({
        id: action.payload.id,
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        contactsEl => contactsEl.id !== action.payload,
      );
    },
  },
});

export const { addcontact, setFilter, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
