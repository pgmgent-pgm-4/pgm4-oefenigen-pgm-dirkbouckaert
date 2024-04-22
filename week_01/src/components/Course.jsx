const Course = ({ course }) => {
  return (
    <li>
      {course.name}{' '}
      <span className="text-sm">({course.teachers.join(', ')})</span>
    </li>
  );
};

export default Course;
