import movies from '../../data/movies';
import MovieList from '../../components/MovieList';

const MoviesPage = () => {
  return (
    <div className="container mx-auto mt-8 w-[calc(100vw-4rem)] max-w-2xl">
      <h1 className="my-4 text-center text-4xl">Movies</h1>

      {movies && movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        <p>No movies found</p>
      )}
    </div>
  );
};

export default MoviesPage;
