import Student from './Student';

const StudentList = ({ students }) => {
  return (
    <div>
      <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {!students || (students.length === 0 && <p>No students found</p>)}
        {students.map((student) => (
          <Student key={student.id} student={student} />
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
