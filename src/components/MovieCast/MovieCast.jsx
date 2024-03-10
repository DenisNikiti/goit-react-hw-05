import { useEffect, useState } from "react";
import { fetchCast } from "../../movie-api";
import { useParams } from "react-router-dom";

export default function MovieCast() {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getCasts() {
      const data = await fetchCast(movieId);

      setCast(data);
    }

    getCasts();
  }, [movieId]);

  return (
    <div>
      {cast && (
        <ul>
          {cast.map((el) => {
            return (
              <li key={el.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${el.profile_path}`}
                />
                <p>{el.original_name}</p>
                <p>Character {el.character} </p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
