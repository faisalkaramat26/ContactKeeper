import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/Auth/authContext";
import AlertContext from "../../context/Alert/alertContext";

const Navbar = (props) => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const { error, clearErrors, isAuthenticated } = authContext;

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
    authContext.logout();
  };

  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={props.icon} /> {props.title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {authContext.isAuthenticated && (
          <li>
            <Link onClick={onClick}>Logout</Link>
          </li>
        )}
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
