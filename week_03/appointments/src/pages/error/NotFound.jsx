const NotFound = () => {
  return (
    <div>
      <h1>Error</h1>
      <p>404</p>
      <p>Not Found</p>

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

export default NotFound;
