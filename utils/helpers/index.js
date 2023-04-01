const API_URL = `https://api.themoviedb.org/3`;

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchMovieApi(pathname, query = "") {
  await delay(1000);
  try {
    const res = await fetch(
      `${API_URL}${pathname}?api_key=${process.env.API_KEY}&${query}`
    );
    return res.json();
  } catch (error) {
    throw new Error(error);
  }
}

async function getTopRatedMovies() {
  try {
    return fetchMovieApi("/movie/top_rated");
  } catch (error) {
    throw new Error("Error happened while fetching genres", error);
  }
}

async function getPopularMovies() {
  try {
    return fetchMovieApi("/movie/popular");
  } catch (error) {
    throw new Error("Error happened while fetching popular movies", error);
  }
}
async function getGenres() {
  try {
    return fetchMovieApi("/genre/movie/list");
  } catch (error) {
    throw new Error("Error happened while fetching categories", error);
  }
}

async function getMoviesByGenre(genreId) {
  try {
    return fetchMovieApi("/discover/movie", {
      query: `with_genres=${genreId}`,
    });
  } catch (error) {
    throw new Error("Error happened while fetching category", error);
  }
}

async function getMovie(movieId) {
  try {
    return fetchMovieApi(`/movie/${movieId}`);
  } catch (error) {
    throw new Error("Error happened while fetching movie", error);
  }
}

export {
  fetchMovieApi,
  getTopRatedMovies,
  getPopularMovies,
  getGenres,
  getMoviesByGenre,
  getMovie,
};
