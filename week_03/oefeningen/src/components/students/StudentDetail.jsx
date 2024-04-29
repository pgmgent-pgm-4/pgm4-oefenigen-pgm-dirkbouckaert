import ReactCountryFlag from 'react-country-flag';
import students from '../../data/students';
import { Link, useParams } from 'react-router-dom';
import {
  FaBirthdayCake,
  FaFingerprint,
  FaGlobe,
  FaPhone,
  FaUser,
} from 'react-icons/fa';
import { cn } from '../../lib/utils';

const StudentDetail = () => {
  const { id } = useParams();
  const student = students.find((student) => student.id === id);

  return (
    <div className={cn('my-container-no-prose', 'max-w-lg')}>
      <Link
        to="/students"
        className="mb-6 flex gap-2 text-lg font-semibold text-slate-700 
                   transition hover:text-slate-500"
      >
        ← Back to all students
      </Link>

      {!student && <p>No student found</p>}
      <h3 className="mb-2 flex items-center justify-between text-slate-700">
        <span>
          {student.firstName} {student.lastName}
        </span>
      </h3>

      <div className="flex justify-between">
        <div aria-label="left">
          <div className="my-1 flex items-center gap-2 text-slate-500">
            <FaFingerprint />
            <p>{student.id}</p>
          </div>

          <div className="my-1 flex items-center gap-2 text-slate-500">
            <FaUser />
            <p>{student.username}</p>
          </div>

          <div className="my-1 flex items-center gap-2 text-slate-500">
            <FaPhone />
            <p>{student.cell}</p>
          </div>

          <div className="my-1 flex items-center gap-2 text-slate-500">
            <FaBirthdayCake />
            <p>{new Date(student.dayOfBirth).toLocaleDateString()}</p>
          </div>

          <div className="my-1 flex items-center gap-2 text-slate-500">
            <FaGlobe />
            {student.nationality}
            <ReactCountryFlag
              countryCode={student.nationality}
              svg
              title={student.nationality}
              className="!h-6 !w-6"
            />
          </div>
        </div>

        <div aria-label="right">
          <img
            src={student.picture.large}
            alt="student avatar"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default StudentDetail;
