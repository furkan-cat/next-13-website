import HomeContainer from "@/containers/home";
import {
  getGenres,
  getMoviesByGenre,
  getPopularMovies,
  getTopRatedMovies,
} from "@/utils/helpers";

export default async function HomePage({ params }) {
  let selectedCategory;
  const [
    { results: topRatedMovies },
    { results: popularMovies },
    { genres: categories },
  ] = await Promise.all([getTopRatedMovies(), getPopularMovies(), getGenres()]);

  if (params.category?.length > 0) {
    const { results } = await getMoviesByGenre(params.category[0]);
    selectedCategory = results;
  }

  return (
    <>
      <HomeContainer
        categories={categories}
        popularMovies={popularMovies}
        topRatedMovies={topRatedMovies}
        selectedCategory={{
          id: params.category?.[0] ?? "",
          movies: selectedCategory ? selectedCategory.slice(0, 7) : [],
        }}
      />
    </>
  );
}
