import MovieList from "../components/MovieList/MovieList.";
import { useEffect, useState } from "react";
import { fetchMovies } from "../movie-api";

export default function Homepage() {
  const [topmovies, setTopmovies] = useState(null);

  useEffect(() => {
    async function getMovie() {
      const data = await fetchMovies();
      setTopmovies(data);
    }
    getMovie();
  }, []);

  return <div>{topmovies && <MovieList movies={topmovies} />}</div>;
}
