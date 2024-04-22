import MovieTagList from './MovieTagList';

const MovieListItem = ({ movie }) => {
  return (
    <li className="rounded-lg bg-blue-50 p-4 text-center shadow-md">
      <h1 className="mb-4 text-xl font-semibold text-blue-600">
        {movie.title}
      </h1>

      <img
        src={movie.thumbnail}
        alt={movie.title}
        className="mx-auto my-4 aspect-[2/3] w-56 w-full object-cover object-center"
      />

      <p>{movie.synopsis}</p>

      {movie.tags && movie.tags.length > 0 && (
        <MovieTagList tags={movie.tags} />
      )}
    </li>
  );
};

export default MovieListItem;
