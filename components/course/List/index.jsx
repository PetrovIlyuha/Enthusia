import Link from 'next/link';
import Image from 'next/image';

const CourseList = ({ products }) => {
  return (
    <section className='container px-6 py-4 mx-auto'>
      <div className='grid gap-6 mb-8 md:grid-cols-1 lg:grid-cols-2'>
        {products?.map(product => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <div className='flex items-center cursor-pointer group p-4 transform transition-all bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 hover:-translate-y-1 hover:shadow-lg hover:text-white hover:bg-blue-600'>
              <div className='relative w-full h-full rounded-md border-2 border-gray-300'>
                <Image
                  alt={product.title}
                  layout='fill'
                  objectFit='cover'
                  src={product.coverImage}
                />
              </div>
              <div id='body' className='flex flex-col ml-5'>
                <h4 id='name' className='text-xl font-semibold mb-2'>
                  {product.title}
                </h4>
                <p
                  id='job'
                  className='text-gray-800 group-hover:text-white  mt-2'>
                  {product.description}
                </p>
                <div className='flex mt-5'>
                  <img
                    alt='avatar'
                    className='w-6 rounded-full border-2 border-gray-300'
                    src='https://picsum.photos/seed/picsum/200'
                  />
                  <p className='ml-3'>{product.author}</p>
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
