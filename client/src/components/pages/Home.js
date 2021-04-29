import React, { useContext, useEffect } from "react";
import Contacts from "../../components/contacts/Contacts";
import ContactForm from "../../components/contacts/ContactForm";
import ContactFilter from "../../components/contacts/ContactFilter";
import AuthContext from "../../context/Auth/authContext";

const Home = () => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, loadUser } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      loadUser();
    }

    // eslint-disbale-next-line
  }, [isAuthenticated, loadUser]);

  return (
    <div className="grid-2">
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
