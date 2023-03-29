import MovieInfo from "@/componets/movie-info";
import { notFound } from "next/navigation";
import movieData from "@/mocks/movies.json";

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

 export default async function MoviePage({ params, searchParams }) {
  await delay(3000);
  const movieDetail = movieData.results.find((movie) => movie.id === params.id);

  if (!movieDetail) notFound();
  if (searchParams.error === "true") throw new Error("Error Happened");

  return (
    <div>
      <MovieInfo movie={movieDetail} />
    </div>
  );
}
