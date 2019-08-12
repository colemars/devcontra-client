import React from 'react';
import { useAuthContext } from "../context/user-context";

const WithAuth = ({ children }) => {
  return (
    <useAuthContext.Provider>
      {children}
    </useAuthContext.Provider>
  )
};

export default WithAuth;