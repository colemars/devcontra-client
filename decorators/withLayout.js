import React from 'react';
import PropTypes from 'prop-types';
import { useLayoutContext } from '../context/layout-context';

const WithLayout = ({ children }) => {
  return <useLayoutContext.Provider>{children}</useLayoutContext.Provider>;
};

WithLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WithLayout;
