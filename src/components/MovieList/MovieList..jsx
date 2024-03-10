import css from "./MovieList.module.css";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

export default function MovieList({ movies }) {
  const location = useLocation();
  return (
    <div>
      {movies && (
        <ul className={css.list}>
          {movies.map((movie) => {
            return (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={location}>
                  {movie.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
