import { createSlice,createEntityAdapter } from "@reduxjs/toolkit";

export const contactAdaptor = createEntityAdapter(); 
export const contactsSelector = contactAdaptor.getSelectors((state) => state.contacts);

const contactSlice = createSlice({
  name: "contacts",
  initialState:contactAdaptor.getInitialState(),
  reducers: {
    addContact: contactAdaptor.addOne,
    addContacts: contactAdaptor.addMany,
    deleteContact: contactAdaptor.removeOne,
    removeAllContacts: contactAdaptor.removeAll,
    updateContact: contactAdaptor.updateOne,
  },
});

export const { addContact,addContacts,deleteContact,removeAllContacts,updateContact } = contactSlice.actions;
export default contactSlice.reducer;
