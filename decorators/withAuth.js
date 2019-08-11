import React, { useState } from 'react';
import { UserProvider } from '../context/user-context';

const WithAuth = ({ children }) => {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  return (
    <UserProvider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </UserProvider>
  )
};

export default WithAuth;