import React, { useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';
import { useAuthContext } from '../context/user-context';

const Index = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuthContext();
  const router = useRouter();
  useEffect(() => {
    async function handleSession() {
      try {
        await Auth.currentAuthenticatedUser();
        setIsLoggedIn(true);
        router.replace('/configure');
      } catch (error) {
        setIsLoggedIn(false);
        router.replace('/signin');
      }
    }
    handleSession();
  }, [isLoggedIn]);

  return <></>;
};

export default Index;
