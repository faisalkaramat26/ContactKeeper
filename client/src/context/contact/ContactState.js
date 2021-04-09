import React, { useReducer } from "react";
//import uuid from "uuid";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";
import ContactContext from "./contactContext";

const ContactState = (props) => {
  const intialState = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "john@email.com",
        phone: "1234567890",
        type: "personal",
      },
      {
        id: 2,
        name: "Sara Smith",
        email: "sara@email.com",
        phone: "1111167890",
        type: "personal",
      },
      {
        id: 3,
        name: "Kane Williamson",
        email: "kane@email.com",
        phone: "9988227733",
        type: "professional",
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, intialState);

  //Add Contact
  const addContact = (contact) => {
    contact.id = 4;
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  //Delete Contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  //Update Contact

  //Set Current Contact

  //Clear Current Contact

  //Filter Contacts

  //Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
        deleteContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
