/* eslint-disable import/prefer-default-export */
import { useState } from 'react';
import createUseContext from 'constate'; // State Context Object Creator

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return { isLoggedIn, setIsLoggedIn };
};

export const useAuthContext = createUseContext(useAuth);
