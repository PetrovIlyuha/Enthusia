import Modal from '@components/common/Modal';
import CourseHero from '@components/course/Single/Hero/index';
import KeyPoints from '@components/course/Single/KeyPoints/index';
import Lectures from '@components/course/Single/Lectures/index';
import MainFrontShell from '@components/layout/MainFrontShell';

export default function Course() {
  return (
    <MainFrontShell>
      <div className='fit-page-shell'>
        <div className='relative max-w-7xl mx-auto px-4'>
          <CourseHero />
          <KeyPoints />
          <Lectures />
          <Modal />
        </div>
      </div>
    </MainFrontShell>
  );
}
