import HomeContainer from "@/containers/home";
import Movies from "@/mocks/movies.json";

const API_URL = `https://api.themoviedb.org/3`;

async function getTopRatedMovies() {
  const res = await fetch(
    `${API_URL}/movie/top_rated?api_key=${process.env.API_KEY}&page=1`
  );
  return res.json();
}
async function getPopularMovies() {
  const res = await fetch(
    `${API_URL}/movie/popular?api_key=${process.env.API_KEY}&page=1`
  );
  return res.json();
}
async function getCategories() {
  const res = await fetch(
    `${API_URL}/genre/movie/list?api_key=${process.env.API_KEY}&page=1`
  );
  return res.json();
}

export default async function HomePage({ params }) {
  const topRatedPromise = getTopRatedMovies();
  const popularPromise = getPopularMovies();
  const categoriesPromise = getCategories();

  const [
    { results: topRatedMovies },
    { results: popularMovies },
    { genres: categories },
  ] = await Promise.all([topRatedPromise, popularPromise, categoriesPromise]);

  let selectedCategory;

  if (params.category?.length > 0) {
    selectedCategory = true;
  }

  return (
    <>
      <HomeContainer
        categories={categories}
        popularMovies={popularMovies}
        topRatedMovies={topRatedMovies}
        selectedCategory={{
          id: params.category?.[0] ?? "",
          movies: selectedCategory ? Movies.results.slice(0, 7) : [],
        }}
      />
    </>
  );
}
