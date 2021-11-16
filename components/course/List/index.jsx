import Link from 'next/link';

const CourseList = () => {
  return (
    // <section className='grid grid-cols-2 gap-4 mb-5'>
    <section class='container px-6 py-4 mx-auto'>
      <div class='grid gap-6 mb-8 md:grid-cols-1 lg:grid-cols-2'>
        {Array.from({ length: 4 }).map((_, i) => (
          <Link href='/course' key={i}>
            <div class='flex items-center cursor-pointer group p-4 transform transition-all bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 hover:-translate-y-1 hover:shadow-lg hover:text-white hover:bg-blue-600'>
              <img
                alt='mountain'
                class='w-45 rounded-md border-2 border-gray-300'
                src='https://picsum.photos/seed/picsum/200'
              />
              <div id='body' class='flex flex-col ml-5'>
                <h4 id='name' class='text-xl font-semibold mb-2'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </h4>
                <p id='job' class='text-gray-800 group-hover:text-white  mt-2'>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div class='flex mt-5'>
                  <img
                    alt='avatar'
                    class='w-6 rounded-full border-2 border-gray-300'
                    src='https://picsum.photos/seed/picsum/200'
                  />
                  <p class='ml-3'>John Doe</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CourseList;
