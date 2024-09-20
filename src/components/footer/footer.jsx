import styles from "./footer.module.css";
import Socials from "./socials/socials";
import Contact from "./contact/contact";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <article>
        <Link href="https://crlarrea.github.io">
          crlarrea 
        </Link>
      </article>
      <Socials />
      <Contact />
    </footer>
  );
}
