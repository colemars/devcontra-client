/* eslint-disable import/prefer-default-export */
import { useState } from 'react';
import createUseContext from 'constate'; // State Context Object Creator

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return { isLoggedIn, setIsLoggedIn };
};
// re-render consumers only when value.isLoggedIn changes
export const useAuthContext = createUseContext(useAuth, value => [
  value.isLoggedIn,
]);

const useData = () => {
  const [data, setData] = useState([]);
  return { data, setData };
};

export const useDataContext = createUseContext(useData, value => [value.data]);
