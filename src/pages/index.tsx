// pages/index.tsx

import React from 'react';
import { SessionProvider } from 'next-auth/react';
import Login from './Login'; 

const IndexPage: React.FC = () => {
  return (
    <SessionProvider>
      <Login />
    </SessionProvider>
  );
};

export default IndexPage;
