/* eslint-disable import/prefer-default-export */
import { useState } from 'react';
import constate from 'constate'; // State Context Object Creator

const useSideBar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const handleOpen = () => {
    console.log('handle open');
    setIsSideBarOpen(true);
  };
  return { isSideBarOpen, setIsSideBarOpen };
};

export const useLayoutContext = constate(useSideBar);
