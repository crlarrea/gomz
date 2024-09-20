import styles from "./socials.module.css";
import { FaSpotify, FaYoutube, FaAmazon } from "react-icons/fa6";
import { SiApplemusic } from "react-icons/si";

import Link from "next/link";

export default function Socials() {
  return (
    <article>
      <ul className={styles.socials}>
        <li>
          <Link
            href="https://open.spotify.com/artist/7BLezVBmCyG6aFk101o7vA?si=TScO6EU2TAaQ0s0-qvAuQg&nd=1&dlsi=6a3661c7b73646b8"
            target="_blank"
          >
            <FaSpotify />
          </Link>
        </li>
        <li>
          <Link
            href="https://consent.youtube.com/m?continue=https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUC4QfpT6yP_nOijA4lLbzokA%3Fcbrd%3D1&gl=ES&m=0&pc=yt&cm=2&hl=en-GB&src=1"
            target="_blank"
          >
            <FaYoutube />
          </Link>
        </li>
        <li>
          <Link
            href="https://music.amazon.es/artists/B07YWK385S"
            target="_blank"
          >
            <FaAmazon />
          </Link>
        </li>
        <li>
          <Link
            href="https://music.apple.com/es/artist/gomz/1486379806"
            target="_blank"
          >
            <SiApplemusic />
          </Link>
        </li>
      </ul>
    </article>
  );
}
