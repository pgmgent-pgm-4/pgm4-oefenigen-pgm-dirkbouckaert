const Student = ({ student }) => {
  return (
    <li>
      {student.firstName} {student.lastName}
    </li>
  );
};

export default Student;
