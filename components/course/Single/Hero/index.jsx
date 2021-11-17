export default function CourseHero({ title, description, coverImage }) {
  const titleLengthInWords = title.split(' ').length;
  const titleWords = title.split(' ');
  const wordsInWhite = titleWords
    .slice(0, Math.ceil(titleLengthInWords / 2))
    .join(' ');
  const wordsInYellow = titleWords
    .slice(Math.ceil(titleLengthInWords / 2))
    .join(' ');
  return (
    <section>
      <div className='relative'>
        <div className='absolute inset-x-0 bottom-0 h-1/2 bg-gray-100' />
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
          <div className='relative shadow-xl sm:rounded-2xl sm:overflow-hidden'>
            <div className='absolute inset-0'>
              <img
                className='h-full w-full object-cover animate-changeScale duration-300'
                src={coverImage}
                alt='People working on laptops'
              />
              <div className='absolute inset-0 bg-indigo-700 mix-blend-multiply' />
            </div>
            <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8'>
              <h1 className='text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl'>
                <span className='block text-white'>{wordsInWhite}</span>
                <span className='block text-yellow-200'>{wordsInYellow}</span>
              </h1>
              <p className='mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl'>
                {description}
              </p>
              <div className='mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center'>
                <div className='space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5'>
                  <a
                    href='#'
                    className='flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8'>
                    Get started
                  </a>
                  <a
                    href='#'
                    className='flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8'>
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
