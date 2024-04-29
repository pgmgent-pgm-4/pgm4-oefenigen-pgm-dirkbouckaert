import { Link, useNavigate, useRouteError } from 'react-router-dom';

// Components
import Navbar from '../../components/Navbar';
import { HiHome, HiArrowUturnLeft } from 'react-icons/hi2';
import { FaExclamationTriangle } from 'react-icons/fa';

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back one page
  };

  return (
    <>
      <Navbar />
      <section className="flex h-96 flex-col items-center justify-center text-center">
        <FaExclamationTriangle className="mb-4 text-4xl text-yellow-400" />
        <h1 className="mb-4 text-6xl font-bold">Something went wrong!</h1>
        <p className="my-5 text-xl">{error.statusText || error.message}</p>
        <div className="mt-4 flex gap-4">
          <button
            onClick={handleGoBack}
            className="btn btn-primary flex items-center gap-2"
          >
            <HiArrowUturnLeft size={20} />
            <span>Go Back</span>
          </button>

          <Link to="/" className="btn btn-primary flex items-center gap-2">
            <HiHome size={20} />
            <span>Go Home</span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
