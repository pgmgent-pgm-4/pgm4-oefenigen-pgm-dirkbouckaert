import MovieListItem from './MovieListItem';

const MovieList = ({ movies }) => {
  return (
    <ul className="mb-12 mt-8 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
      {movies.map((movie, index) => (
        <MovieListItem key={index} movie={movie} />
      ))}
    </ul>
  );
};

export default MovieList;
