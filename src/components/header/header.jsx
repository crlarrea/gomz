import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/tour">tour</Link>
          </li>
          <li>
            <Link href="/videos">videos</Link>
          </li>
          <li>
            <Link href="/music">musica</Link>
          </li>
          <li>
            <Link href="/bio">bio</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
