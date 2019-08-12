import React from 'react';
import { useAuthContext } from "../context/user-context";
import Layout from '../components/Layout';
import SignIn from './signin';

const Index = () => {
  const { isLoggedin } = useAuthContext();

  return (
    <Layout>
      {!isLoggedin && <SignIn />}
    </Layout>
  );
}

export default Index;