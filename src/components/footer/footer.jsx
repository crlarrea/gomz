import styles from "./footer.module.css";
import StreamingPlatforms from "./streamingPlatforms/streamingPlatforms";
import Contact from "./contact/contact";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <article>
        <Link href="https://crlarrea.github.io">
          crlarrea &copy;{new Date().getFullYear()}
        </Link>
      </article>
      <StreamingPlatforms/>
      <Contact />
    </footer>
  );
}
