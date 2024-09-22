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
              <li key={link.text}>
                <Link
                  href={link.path}
                  className={pathName === link.path ? styles.active : ""}
                >
                  {link.text}
                </Link>
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
