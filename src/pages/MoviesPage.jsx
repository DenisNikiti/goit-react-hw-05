import { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import MovieList from "../components/MovieList/MovieList.";
import { searchMovies } from "../movie-api";
import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  const [movies, setmovies] = useState(null);
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    if (params.get("query") === null) {
      return;
    }
    async function getMovies() {
      const data = await searchMovies(params.get("query"));
      setmovies(data);
    }

    getMovies();
  }, [params]);

  const searchfilms = params.get("query") ?? "";
  return (
    <div>
      <Formik
        initialValues={{
          seacrhfilm: searchfilms,
        }}
        onSubmit={(values, action) => {
          params.set("query", values.seacrhfilm);
          setParams(params);
          action.resetForm();
        }}
      >
        <Form>
          <Field name="seacrhfilm" />
          <button type="submit">Seacrh</button>
        </Form>
      </Formik>
      {movies && <MovieList movies={movies} />}
    </div>
  );
}
