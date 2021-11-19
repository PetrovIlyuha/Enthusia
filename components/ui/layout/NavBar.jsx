import Link from 'next/link';
import { Fragment, useState } from 'react';
import Image from 'next/image';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { useProducts } from '../../providers/ProductsContext';

import { motion } from 'framer-motion';
import ConnectButton from '../common/ConnectButton';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavBar() {
  const [mobileShowProducts, setMobileShowProducts] = useState(false);
  const showMobileProducts = () => {
    setMobileShowProducts(prev => !prev);
  };
  const products = useProducts();
  return (
    <Popover className='fixed top-0 left-0 w-full z-50 shadow-md bg-gray-50'>
      <div className='flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10'>
        <div>
          <Link href='/'>
            <div className='flex cursor-pointer'>
              <span className='sr-only'>Enthusia</span>
              <img
                className='h-8 w-auto sm:h-10'
                src='/enthusia_logo.svg'
                alt=''
              />
            </div>
          </Link>
        </div>
        <div className='-mr-2 -my-2 md:hidden'>
          <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
            <span className='sr-only'>Open menu</span>
            <MenuIcon className='h-6 w-6' aria-hidden='true' />
          </Popover.Button>
        </div>
        <div className='hidden md:flex-1 md:flex md:items-center md:justify-between'>
          <Popover.Group as='nav' className='flex space-x-10'>
            <Popover className='relative'>
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
                    )}>
                    <span>Products</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500',
                      )}
                      aria-hidden='true'
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-200'
                    enterFrom='opacity-0 translate-y-1'
                    enterTo='opacity-100 translate-y-0'
                    leave='transition ease-in duration-150'
                    leaveFrom='opacity-100 translate-y-0'
                    leaveTo='opacity-0 translate-y-1'>
                    <Popover.Panel className='absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-3xl'>
                      {({ close }) => (
                        <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                          <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-4'>
                            {products.length > 0 &&
                              products?.map(item => (
                                <Link
                                  href={`/products/${item.id}`}
                                  key={item.id}>
                                  <div
                                    className='-m-3 p-3 flex flex-col items-center rounded-lg cursor-pointer hover:bg-gray-50'
                                    onClick={() => {
                                      close();
                                    }}>
                                    <div className='relative flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12'>
                                      <Image
                                        src={item.coverImage}
                                        layout='fill'
                                        objectFit='cover'
                                      />
                                    </div>
                                    <div className='ml-4'>
                                      <p className='text-bas text-center font-medium text-gray-900'>
                                        {item.title}
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                          </div>
                        </div>
                      )}
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <a
              href='#'
              className='text-base font-medium text-gray-500 hover:text-gray-900'>
              WishList
            </a>
          </Popover.Group>
          <div className='flex items-center md:ml-12'>
            <ConnectButton />
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter='duration-200 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'>
        <Popover.Panel
          focus
          className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'>
          {({ close }) => (
            <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
              <div className='pt-5 pb-6 px-5'>
                <div className='flex items-center justify-between'>
                  <Link href='/'>
                    <div className='flex items-center'>
                      <img
                        className='h-10 w-auto'
                        src='/enthusia_logo.svg'
                        alt='Enthusia'
                      />
                      <h3 className='font-semibold'>Enthusia</h3>
                    </div>
                  </Link>
                  <div className='-mr-2'>
                    <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                      <span className='sr-only'>Close menu</span>
                      <XIcon className='h-6 w-6' aria-hidden='true' />
                    </Popover.Button>
                  </div>
                </div>
                <div className='mt-6 overflow-y-scroll'>
                  <div className='flex items-center'>
                    <h3 className='text-sm font-bold'>Products</h3>
                    <ChevronDownIcon
                      onClick={showMobileProducts}
                      className={classNames(
                        mobileShowProducts ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500',
                      )}
                      aria-hidden='true'
                    />
                  </div>
                  <nav className='grid grid-cols-3 gap-3'>
                    {mobileShowProducts &&
                      products.length > 0 &&
                      products?.map((item, itemIndex) => (
                        <Link
                          key={item.title}
                          href={`/products/${item.id}`}
                          className='-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50'>
                          <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{
                              opacity: 1,
                              y: 0,
                              transition: {
                                delay: 0.05 * itemIndex,
                                duration: 0.1,
                              },
                            }}
                            onClick={close}
                            className='flex flex-col items-center bg-gray-200 p-3 rounded-md'>
                            <div className='relative flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white'>
                              <Image
                                src={item.coverImage}
                                layout='fill'
                                objectFit='cover'
                              />
                            </div>
                            <div className='ml-4 text-xs font-medium text-gray-900'>
                              {item.title}
                            </div>
                          </motion.div>
                        </Link>
                      ))}
                  </nav>
                </div>
              </div>
              <div className='py-6 px-5'>
                <div className='grid grid-cols-2 gap-4'>
                  <a
                    href='#'
                    className='text-base font-medium text-gray-900 hover:text-gray-700'>
                    WishList
                  </a>
                </div>
                <div className='mt-6'>
                  <ConnectButton />
                </div>
              </div>
            </div>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
