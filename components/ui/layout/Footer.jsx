import React from 'react';

const Footer = () => {
  return (
    <footer
      className='bg-blue-900 text-white w-full'
      aria-labelledby='footer-heading'>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>

      <div className='mt-12 border-t border-gray-200 py-8'>
        <p className='text-base text-center font-bold'>
          &copy; {new Date().getFullYear()} Enthusia, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
