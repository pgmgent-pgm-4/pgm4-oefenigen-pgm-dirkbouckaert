import Student from './Student';

const StudentList = ({ students }) => {
  return (
    <div>
      <ul>
        {!students || (students.length === 0 && <p>No students found</p>)}
        {students.map((student) => (
          <Student key={student.id} student={student} />
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
