import Link from "next/link";
import { BiMovie } from "react-icons/bi";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={`container fluid ${styles.header}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <BiMovie /> NetFilms
        </Link>
        <nav className={styles.navigation}>
          <Link href="/movies">Movies</Link>
          <Link href="/series">Series</Link>
          <Link href="/kids">Kids</Link>
        </nav>
      </div>
    </header>
  );
}
