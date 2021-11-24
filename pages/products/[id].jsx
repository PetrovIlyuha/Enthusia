import Modal from '@components/ui/common/Modal';
import CourseHero from '@components/ui/course/Single/Hero/index';
import KeyPoints from '@components/ui/course/Single/KeyPoints/index';
import Lectures from '@components/ui/course/Single/Lectures/index';
import { getAllCourses } from 'content/courses/getCourses';

export default function Course({ product }) {
  return (
    <div className='fit-page-shell'>
      <div className='relative max-w-7xl mx-auto px-4'>
        <CourseHero
          title={product.title}
          description={product.description}
          coverImage={product.coverImage}
        />
        <KeyPoints features={product.wsl} />
        <Lectures />
        <Modal />
      </div>
    </div>
  );
}

export function getStaticPaths() {
  const { data } = getAllCourses();
  const paths = data.map(product => ({
    params: { id: product.id },
  }));
  return { paths, fallback: 'blocking' };
}

export function getStaticProps({ params }) {
  const { courseMap } = getAllCourses();

  return { props: { product: courseMap[params.id] } };
}
