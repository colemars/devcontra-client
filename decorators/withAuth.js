import React from 'react';
import PropTypes from 'prop-types';
import { useAuthContext } from '../context/user-context';

const WithAuth = ({ children }) => {
  return <useAuthContext.Provider>{children}</useAuthContext.Provider>;
};

WithAuth.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WithAuth;
