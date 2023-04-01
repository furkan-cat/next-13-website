import MovieInfo from "@/componets/movie-info";
import { getMovie } from "@/utils/helpers";
import { notFound } from "next/navigation";

export default async function MoviePage({ params, searchParams }) {
  const movieDetail = await getMovie(params.id);

  if (!movieDetail) notFound();

  return (
    <div>
      <MovieInfo movie={movieDetail} />
    </div>
  );
}
