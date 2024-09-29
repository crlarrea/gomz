"use client";
import Link from "next/link";
import styles from "./header.module.css";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();
  const links = [
    { text: "home", path: "/" },
    { text: "tour", path: "/tour" },
    { text: "videos", path: "/videos" },
    { text: "musica", path: "/music" },
    { text: "bio", path: "/bio" },
  ];
  return (
    <header
      className={`${styles.header}  ${
        pathName === "/" ? styles.heroHeader : ""
      }`}
    >
      <nav>
        <ul>
          {links.map((link) => {
            return (
              <li
                key={link.text}
                className={
                  pathName === link.path ? styles.active : styles.inactive
                }
              >
                <Link href={link.path}>{link.text}</Link>
                <span></span>
              </li>
            );
          })}
        </ul>
      </nav>
      <div>
        <p>Muriendo en el cielo</p>
        <p>ya disponible</p>
      </div>
    </header>
  );
}
