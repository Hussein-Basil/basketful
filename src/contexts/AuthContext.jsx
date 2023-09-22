import React, { useState, useEffect } from "react";
import { createContext } from "react";
import PersistLogin from "../components/PersistLogin";

const AuthContext = createContext({});

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [auth, setAuth] = useState({});
  const [rememberMe, setRememberMe] = useState(
    JSON.parse(localStorage.getItem("rememberMe")) || false
  );

  const value = {
    user,
    setUser,
    auth,
    setAuth,
    rememberMe,
    setRememberMe,
  };

  return (
    <AuthContext.Provider value={value}>
      <PersistLogin>{children}</PersistLogin>
    </AuthContext.Provider>
  );
};
