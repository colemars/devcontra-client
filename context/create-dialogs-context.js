import { useState } from 'react';
import createUseContext from 'constate'; // State Context Object Creator

const useCreateDesign = () => {
  const [isCreateDesignOpen, setIsCreateDesignOpen] = useState(false);
  return { isCreateDesignOpen, setIsCreateDesignOpen };
};
// re-render consumers only when value.isLoggedIn changes
export const useCreateDesignContext = createUseContext(
  useCreateDesign,
  value => [value.isCreateDesignOpen]
);

const useCreateDialogs = () => {
  const [isCreateDesignOpen, setIsCreateDesignOpen] = useState(false);
  const [isCreateOrgOpen, setIsCreateOrgOpen] = useState(false);
  return {
    isCreateDesignOpen,
    setIsCreateDesignOpen,
    isCreateOrgOpen,
    setIsCreateOrgOpen,
  };
};

export const useCreateDialogsContext = createUseContext(
  useCreateDialogs,
  value => [value.isCreateDesignOpen, value.isCreateOrgOpen]
);
