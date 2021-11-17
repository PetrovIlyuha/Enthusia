import { CourseList, Hero } from '@components/index';
import { getAllCourses } from 'content/courses/getCourses';

export default function Home({ courses }) {
  return (
    <div className='fit-page-shell'>
      <div className='relative bg-white overflow-hidden'>
        <div className='relative max-w-7xl mx-auto px-4'>
          <div className='fit'>
            <Hero />
            <CourseList products={courses} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function getStaticProps(ctx) {
  const { data } = getAllCourses();
  return {
    props: { courses: data },
  };
}
