
const CourseList = ({products, children}) => {
  return (
      <section className='container px-6 py-4 mx-auto'>
        <div className='grid gap-6 mb-8 md:grid-cols-1 lg:grid-cols-2'>
          {products?.map(product => children(product))}
        </div>
      </section>
  );
};

export default CourseList;
