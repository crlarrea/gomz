import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <article>
        <video controls autoPlay loop muted>
          <source src="video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </article>
      <article>
        <p>gomz</p>
      </article>
    </section>
  );
}
