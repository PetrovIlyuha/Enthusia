import React from 'react';
import { Footer, NavBar } from '..';

const MainFrontShell = ({ children }) => {
  return (
    <div className='bg-white'>
      <NavBar />
      <div className='mt-32'>{children}</div>
      <Footer />
    </div>
  );
};

export default MainFrontShell;
