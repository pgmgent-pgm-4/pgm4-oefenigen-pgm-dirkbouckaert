import Student from '../../components/Student';
import students from '../../data/students';

const StudentsPage = () => {
  return (
    <div className="container mx-auto mt-8 w-[calc(100vw-4rem)] max-w-2xl">
      <h1 className="my-4 text-center text-4xl">Students</h1>

      {students && students.length > 0 ? (
        <ul>
          {students.map((student) => (
            <Student key={student.id} student={student} />
          ))}
        </ul>
      ) : (
        <p>No students found</p>
      )}
    </div>
  );
};

export default StudentsPage;
