import styles from "./footer.module.css";
import Socials from "./socials/socials";
import Contact from "./contact/contact";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <article>
        <p></p>
      </article>
      <Socials />
      <Contact />
    </footer>
  );
}
