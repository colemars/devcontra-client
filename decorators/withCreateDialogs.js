import React from 'react';
import PropTypes from 'prop-types';
import { useCreateDialogsContext } from '../context/create-dialogs-context';

const WithCreateDialogs = ({ children }) => {
  console.log('here', useCreateDialogsContext);
  return (
    <useCreateDialogsContext.Provider>
      {children}
    </useCreateDialogsContext.Provider>
  );
};

WithCreateDialogs.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WithCreateDialogs;
