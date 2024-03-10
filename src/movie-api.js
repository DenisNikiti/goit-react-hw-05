import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
export const fetchMovies = async () => {
  const response = await axios.get(
    "/trending/movie/day?api_key=9ecb0db939f2a5a39195b1e82a041baf"
  );
  return response.data.results;
};

export const fetchMoviedetails = async (id) => {
  const response = await axios.get(
    `/movie/${id}?api_key=9ecb0db939f2a5a39195b1e82a041baf`
  );
  return response.data;
};

export const fetchMoviereviews = async (id) => {
  const response = await axios.get(
    `/movie/${id}/reviews?api_key=9ecb0db939f2a5a39195b1e82a041baf`
  );
  return response.data.results;
};

export const fetchCast = async (id) => {
  const response = await axios.get(
    `/movie/${id}/credits?api_key=9ecb0db939f2a5a39195b1e82a041baf`
  );

  return response.data.cast;
};

export const searchMovies = async (movie) => {
  const response = await axios.get(
    `/search/movie?query=${movie}&api_key=9ecb0db939f2a5a39195b1e82a041baf`
  );
  return response.data.results;
};
