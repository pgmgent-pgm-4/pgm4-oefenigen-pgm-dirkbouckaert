import { BiArrowBack, BiHome } from 'react-icons/bi';
import { Link, useNavigate, useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 text-xl">
      <h1>Error</h1>
      <p>{error.message}</p>
      <p>{error.statusText}</p>

      <div className="my-8 flex flex-col gap-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-blue-500 hover:text-blue-600"
        >
          <BiHome />
          Go Home
        </Link>

        <a
          className="flex cursor-pointer items-center gap-2 text-blue-500 hover:text-blue-600"
          onClick={handleGoBack}
        >
          <BiArrowBack />
          Go Back
        </a>
      </div>
    </div>
  );
};

export default Error;
