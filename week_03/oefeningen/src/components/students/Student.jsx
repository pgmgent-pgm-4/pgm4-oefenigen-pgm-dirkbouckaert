import ReactCountryFlag from 'react-country-flag';
import { FaPhone, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Student = ({ student }) => {
  return (
    <Link to={`/students/${student.id}`}>
      <li className="relative rounded border border-slate-200 bg-slate-50 p-2 shadow-md">
        <h5 className="mb-2 text-slate-700">
          {student.firstName} {student.lastName}
        </h5>
        <ReactCountryFlag
          countryCode={student.nationality}
          svg
          title={student.nationality}
          className="absolute right-2 top-2"
        />
        <div className="my-1 flex items-center gap-2 text-slate-500">
          <FaUser />
          <p>{student.username}</p>
        </div>
        <div className="my-1 flex items-center gap-2 text-slate-500">
          <FaPhone />
          <p>{student.cell}</p>
        </div>
      </li>
    </Link>
  );
};

export default Student;
