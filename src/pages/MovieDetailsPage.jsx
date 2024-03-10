import { Suspense, useEffect, useRef } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { fetchMoviedetails } from "../movie-api";
import { useState } from "react";
import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const [movie, setmovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  useEffect(() => {
    async function getDetails() {
      const data = await fetchMoviedetails(movieId);
      setmovie(data);
    }
    getDetails();
  }, [movieId]);

  const backRef = useRef(location.state ?? "./moviess");
  return (
    <div>
      <Link to={backRef.current}>Go back</Link>
      {movie && (
        <div className={css.container}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}
`}
          />
          <div>
            <h2>{movie.original_title}</h2>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <ul>
              {movie.genres.map((el) => {
                return <li key={el.id}>{el.name}</li>;
              })}
            </ul>
            <p>Additional Info</p>
            <ul className={css.linkConteiner}>
              <li>
                <Link to={"reviews"}>Reviews</Link>
              </li>
              <li>
                <Link to={"cast"}>Cast</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      <Suspense fallback={<div></div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
