import MovieInfo from "@/componets/movie-info";
import Categories from "@/componets/categories";
import MoviesSection from "@/componets/movies-section";

export default function HomeContainer({
  topRatedMovies = [],
  popularMovies = [],
  categories = [],
  selectedCategory,
}) {
  return (
    <div>
      <MovieInfo movie={topRatedMovies?.[0]} />
      <Categories categories={categories.slice(0, 5)} />
      {selectedCategory.movies.length > 0 && (
        <MoviesSection
          movies={selectedCategory.movies}
          title={
            categories.find((genre) => `${genre.id}` === selectedCategory.id)
              ?.name
          }
        />
      )}
      <MoviesSection movies={topRatedMovies} title="Top Rated" />
      <MoviesSection movies={popularMovies} title="Popular" />
    </div>
  );
}
