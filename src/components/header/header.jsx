"use client";
import Link from "next/link";
import styles from "./header.module.css";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();
  return (
    <header
      className={`${styles.header}  ${
        pathName === "/" ? styles.heroHeader : ""
      }`}
    >
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
      <div>
        <p>Muriendo en el cielo</p>
        <p>ya disponible</p>
      </div>
    </header>
  );
}
