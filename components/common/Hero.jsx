import { ChevronRightIcon } from '@heroicons/react/solid';

const Hero = () => {
  return (
    <div className='pt-10 mb-20 bg-gray-900 rounded-lg shadow-xl sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden'>
      <div className='mx-auto max-w-7xl lg:px-8'>
        <div className='lg:grid lg:grid-cols-2 lg:gap-24'>
          <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center'>
            <div className='lg:py-24'>
              <a
                href='#'
                className='inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200'>
                <span className='px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full'>
                  Powered by Blockchain
                </span>
                <span className='ml-4 text-sm'>
                  Buy whatever course you need with Ethereum
                </span>
                <ChevronRightIcon
                  className='ml-2 w-5 h-5 text-gray-500'
                  aria-hidden='true'
                />
              </a>
              <h1 className='mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl'>
                <span className='block'>Modern Platform</span>
                <span className='block text-indigo-400'>
                  for your education
                </span>
              </h1>
              <p className='mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                In these fast-pacing technologically-driven times you've found
                the place where all the knowledge you need can be bought with
                Crypto
              </p>
            </div>
          </div>
          <div className='sm:-mb-48 lg:m-0 lg:relative'>
            <div className='max-w-md px-10 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0'>
              <img
                style={{
                  border: '2px solid grey',
                  boxShadow: '0px 10px 25px rgba(245,245,255,0.4)',
                }}
                className='w-full h-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none'
                src='/hero_3d.jpg'
                width='100px'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
