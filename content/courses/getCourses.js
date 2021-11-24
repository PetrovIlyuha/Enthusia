import courses from './index.json';

export const getAllCourses = () => {
  return {
    data: courses,
    courseMap: courses.reduce((all, next, index) => {
      all[next.id] = next;
      all[next.id].index = index;
      return all;
    }, {}),
  };
};
