import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function MoviesSection({ title, movies }) {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.moviesContainer}>
        {movies.map((movie) => (
          <div className={styles.movie} key={movie.id}>
            <Link href={`/movie/${movie.id}`}>
              <Image
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
                unoptimized
                fill
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
