import React from 'react';
import Footer  from './Footer';
import NavBar  from './NavBar';

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
