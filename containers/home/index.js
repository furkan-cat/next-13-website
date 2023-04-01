import MovieInfo from "@/componets/movie-info";
import Categories from "@/componets/categories";
import MoviesSection from "@/componets/movies-section";
import movieData from "@/mocks/movies.json";
import genreData from "@/mocks/genres.json";

export default function HomeContainer({
  topRatedMovies = [],
  popularMovies = [],
  categories = [],
  selectedCategory,
}) {
  return (
    <div>
      <MovieInfo movie={movieData.results[2]} />
      <Categories categories={categories.slice(0, 5)} />
      {selectedCategory.movies.length > 0 && (
        <MoviesSection
          movies={selectedCategory.movies}
          title={
            genreData.genres.find(
              (genre) => `${genre.id}` === selectedCategory.id
            ).name
          }
        />
      )}
      <MoviesSection movies={topRatedMovies.slice(9, 15)} title="Top Rated" />
      <MoviesSection movies={popularMovies.slice(9, 15)} title="Popular" />
    </div>
  );
}
