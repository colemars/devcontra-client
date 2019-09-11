import React from 'react';
import PropTypes from 'prop-types';
import { useDataContext } from '../context/user-context';

const WithData = ({ children }) => {
  return <useDataContext.Provider>{children}</useDataContext.Provider>;
};

WithData.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WithData;
