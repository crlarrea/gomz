"use client";
import Link from "next/link";
import styles from "./header.module.css";
import { usePathname } from "next/navigation";
import { FaRegCirclePlay } from "react-icons/fa6";

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
      <div
        className={`${styles.header}  ${pathName === "/" ? "" : styles.hidden}`}
      >
        <Link href="https://ffm.to/muriendoenelcielo" target="_blank">
          <FaRegCirclePlay />
          Muriendo en el cielo
        </Link>
        <p>ya disponible</p>
      </div>
    </header>
  );
}
