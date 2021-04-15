import React, { useReducer } from "react";
import authReducer from "./authReducer";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "../types";
import AuthContext from "./authContext";

const AuthState = (props) => {
  const intialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, intialState);

  //Load User

  //Register User

  //Login User

  //Logout

  //Clear Errors

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        user: state.user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
