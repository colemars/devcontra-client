import React from 'react';
import { useAuthContext } from "../context/user-context";
import Layout from '../components/Layout';
import SignIn from './signin';
import Configure from './configure';

const Index = () => {
  const { isLoggedIn } = useAuthContext();

  return (
    <Layout>
      {!isLoggedIn && <SignIn />}
      {isLoggedIn && <Configure />}
    </Layout>
  );
}

export default Index;