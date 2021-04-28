import React, { Fragment, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/Auth/authContext";
import AlertContext from "../../context/Alert/alertContext";

const Navbar = (props) => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const { error, clearErrors, isAuthenticated, logout, user } = authContext;

  useEffect(() => {
    if (!isAuthenticated) {
      //props.history.push("/login");
    }
    if (error === "Invalid Credentials" || error === "User doesn't exist") {
      alertContext.setAlert(error, "danger");
    } else {
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const onClick = () => {
    logout();
  };

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <Link onClick={onClick}>Logout</Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={props.icon} /> {props.title}
      </h1>
      <ul>
        {!authContext.isAuthenticated && (
          <li>
            <Link to="/register">Register</Link>
          </li>
        )}
        {!authContext.isAuthenticated && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}

        {authContext.isAuthenticated && authLinks}
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Contact Keeper",
  icon: "fas fa-id-card-alt",
};

export default Navbar;
