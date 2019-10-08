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
  const [profileKey, setProfileKey] = useState();
  return { data, setData, profileKey, setProfileKey };
};

export const useDataContext = createUseContext(useData, value => [
  value.data,
  value.profileKey,
]);
