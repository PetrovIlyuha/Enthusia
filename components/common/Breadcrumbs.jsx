import { HomeIcon } from '@heroicons/react/solid';
import React from 'react';

const pages = [
  { name: 'My Orders', href: '#', current: false },
  { name: 'Orders', href: '#', current: true },
];

const Breadcrumbs = () => {
  return (
    <nav className='flex my-4' aria-label='Breadcrumb'>
      <ol
        role='list'
        className='bg-green-600 rounded-md shadow px-6 flex space-x-4'>
        <li className='flex'>
          <div className='flex items-center'>
            <a href='#' className='text-gray-400 hover:text-gray-500'>
              <HomeIcon
                className='flex-shrink-0 h-5 w-5 text-yellow-100 hover:text-yellow-300'
                aria-hidden='true'
              />
              <span className='sr-only'>Buy</span>
            </a>
          </div>
        </li>
        {pages.map(page => (
          <li key={page.name} className='flex '>
            <div className='flex items-center'>
              <svg
                className='flex-shrink-0 w-6 h-full text-white'
                viewBox='0 0 24 44'
                preserveAspectRatio='none'
                fill='white'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'>
                <path d='M.293 0l22 22-22 22h1.414l22-22-22-22H.293z' />
              </svg>
              <a
                href={page.href}
                className='ml-4 text-sm font-medium text-yellow-100 hover:text-yellow-300'
                aria-current={page.current ? 'page' : undefined}>
                {page.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
