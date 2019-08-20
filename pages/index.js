import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthContext } from '../context/user-context';

const Index = () => {
  const { isLoggedIn } = useAuthContext();
  const router = useRouter();
  useEffect(() => {
    if (isLoggedIn) {
      router.replace('/configure');
    }
    if (!isLoggedIn) {
      router.replace('/signin');
    }
  }, [isLoggedIn]);

  return <></>;
};

export default Index;
