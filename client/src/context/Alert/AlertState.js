import React, { useReducer } from "react";
import alertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";
import { v4 as uuid } from "uuid";
import AlertContext from "./alertContext";

const AlertState = (props) => {
  const intialState = [];

  const [state, dispatch] = useReducer(alertReducer, intialState);

  //Set Alert
  const setAlert = (msg, type, timeout = 2000) => {
    const id = uuid();
    dispatch({
      type: SET_ALERT,
      payload: { msg, type, id },
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
  };

  return (
    <AlertContext.Provider value={{ alerts: state, setAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
