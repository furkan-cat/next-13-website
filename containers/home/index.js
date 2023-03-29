import MovieInfo from "@/componets/movie-info";
import Categories from "@/componets/categories";
import MoviesSection from "@/componets/movies-section";
import movieData from "@/mocks/movies.json";
import genreData from "@/mocks/genres.json";

export default function HomeContainer() {
  return (
    <div>
      <MovieInfo movie={movieData.results[2]} />
      <Categories categories={genreData.genres.slice(0, 6)} />
      <MoviesSection
        movies={movieData.results.slice(2, 8)}
        title="Popular Films"
      />
      <MoviesSection
        movies={movieData.results.slice(9, 15)}
        title="Favorites"
      />
    </div>
  );
}
