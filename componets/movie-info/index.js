import Link from "next/link";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import styles from "./styles.module.scss";

export default function MovieInfo({ movie = {} }, isCompact = true) {
  const { poster_path, title, overview, id } = movie;
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      <p
        className={`${styles.overview} ${
          isCompact ? styles.shortOverview : ""
        }`}
      >
        {overview}
      </p>
      <div className={styles.actions}>
        <Link href={`/movie/${id}`} className={styles.actions__play}>
          Play
        </Link>
        <button className={styles.actions__add}>
          <AiOutlinePlus />
        </button>
      </div>
      <div className={styles.moviePoster}>
        <div className={styles.moviePoster__overlay} />
        <Image
          unoptimized
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
          fill={true}
        />
      </div>
    </div>
  );
}
