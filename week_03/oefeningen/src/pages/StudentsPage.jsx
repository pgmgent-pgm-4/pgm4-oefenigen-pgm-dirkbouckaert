import { useEffect, useState } from 'react';

// Data
import students from '../data/students';

// Components
import StudentList from '../components/students/StudentList';
import StudentSearchForm from '../components/students/StudentSearchForm';
import { cn, sortStudentsByFirstName } from '../lib/utils';

const StudentsPage = () => {
  const [filteredStudents, setFilteredStudents] = useState(
    sortStudentsByFirstName(students)
  );
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
    <div
      className={cn(
        'my-container-no-prose max-w-4xl',
        'sm:w-[calc(100vw-6rem)]',
        'md:w-[calc(100vw-8rem)]'
      )}
    >
      <h1>Students</h1>

      <StudentSearchForm setSearch={setSearch} />

      {!students || (students.length === 0 && <p>No students found</p>)}
      {filteredStudents && <StudentList students={filteredStudents} />}
    </div>
  );
};

export default StudentsPage;
