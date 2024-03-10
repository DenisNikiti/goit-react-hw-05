import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviereviews } from "../../movie-api";

export default function MovieReviews() {
  const [review, setreview] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviews() {
      const data = await fetchMoviereviews(movieId);

      if (data.length > 0) {
        setreview(data);

        return;
      }
      setreview(null);
    }
    getReviews();
  }, [movieId]);

  return (
    <div>
      {review ? (
        <ul>
          {review.map((el) => {
            return (
              <li key={el.id}>
                <h4>{el.author}</h4>
                <p>{el.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No reviews</p>
      )}
    </div>
  );
}
