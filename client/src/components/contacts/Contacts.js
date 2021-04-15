import React, { useContext, Fragment } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ContactItem from "./ContactItem";
import ContactContext from "../../context/Contact/contactContext";

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return <h4>Please add contacts</h4>;
  }

  return (
    <Fragment>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map((contact) => (
              <CSSTransition key={contact.id} timeout={500} classNames="item">
                <ContactItem contact={contact} key={contact.id} />
              </CSSTransition>
            ))
          : contacts.map((contact) => (
              <CSSTransition key={contact.id} timeout={500} classNames="item">
                <ContactItem contact={contact} key={contact.id} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contacts;
