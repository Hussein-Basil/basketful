import React, { useState, useEffect } from "react";
import { createContext } from "react";

const AuthContext = createContext({});

export default AuthContext;

export const AuthProvider = (props) => {
  const [status, setStatus] = useState("fetching");
  const [user, setUser] = useState({});
  const [notifications, setNotification] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [auth, setAuth] = useState({});
  const [rememberMe, setRememberMe] = useState(
    JSON.parse(localStorage.getItem("rememberMe")) || false
  );

  const value = {
    status,
    setStatus,
    user,
    setUser,
    notifications,
    setNotification,
    cartItems,
    setCartItems,
    auth,
    setAuth,
    rememberMe,
    setRememberMe,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};
