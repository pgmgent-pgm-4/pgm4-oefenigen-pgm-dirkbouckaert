import { useEffect, useState } from 'react';

// Data
import students from '../data/students';

// Components
import StudentList from '../components/students/StudentList';
import StudentSearchForm from '../components/students/StudentSearchForm';

const StudentsPage = () => {
  students.sort((a, b) => {
    if (a.firstName < b.firstName) {
      return -1;
    }
    if (a.firstName > b.firstName) {
      return 1;
    }
    return 0;
  });
  const [filteredStudents, setFilteredStudents] = useState(students);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // Filter students
    if (search) {
      const filtered = students.filter((student) => {
        if (
          student.firstName.toLowerCase().includes(search.toLowerCase()) ||
          student.lastName.toLowerCase().includes(search.toLowerCase())
        ) {
          return true;
        }
        return false;
      });
      setFilteredStudents(filtered);
    } else {
      setFilteredStudents(students);
    }
  }, [search]);

  return (
    <div className="my-container-no-prose">
      <h1>Students</h1>

      <StudentSearchForm setSearch={setSearch} />

      {!students || (students.length === 0 && <p>No students found</p>)}
      {filteredStudents && <StudentList students={filteredStudents} />}
    </div>
  );
};

export default StudentsPage;
