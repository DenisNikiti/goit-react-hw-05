import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
// import Homepage from "./pages/HomePage";
// import MovieDetailsPage from "./pages/MovieDetailsPage";
// import MovieReviews from "./components/MovieReviews/MovieReviews";
// import MovieCast from "./components/MovieCast/MovieCast";
import Navigation from "./components/Navigation/Navigation";
// import MoviesPage from "./pages/MoviesPage";
// import NotFoundPage from "./pages/NotFoundPage";

const Homepage = lazy(() => import("./pages/HomePage"));

const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));

const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);

const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));

const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<div></div>}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="reviews" element={<MovieReviews />} />
            <Route path="cast" element={<MovieCast />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
