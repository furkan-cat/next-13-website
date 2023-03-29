import Link from "next/link";
import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by &nbsp;
      <Link href="https://twitter.com/FurkanCat" target="_blank">
        Furkan Çat
      </Link>
    </footer>
  );
}
