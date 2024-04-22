import { FaBook } from 'react-icons/fa';
import Course from './Course';

const Student = ({ student }) => {
  return (
    <article className="my-4 block w-full border p-4 shadow">
      <h2 className="font mb-2 text-xl font-semibold uppercase tracking-wide ">
        {student.firstname} {student.lastname}
      </h2>

      <p>{new Date(student.dob * 1000).toLocaleDateString()}</p>

      {student.courses && student.courses.length > 0 ? (
        <div className="my-2 flex items-start justify-start gap-4">
          <FaBook className="mt-2 h-6 w-6 text-orange-500" />
          <ul>
            {student.courses.map((course) => (
              <Course key={course.name} course={course} />
            ))}
          </ul>
        </div>
      ) : (
        <p>Geen cursussen</p>
      )}
    </article>
  );
};

export default Student;
