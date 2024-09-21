import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <article>
        <video autoPlay loop muted>
          <source
            src="https://video.wixstatic.com/video/2f40b5_50f0d9838b8441209218257a0c1368b3/1080p/mp4/file.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </article>
      <article>
        <p>gomz</p>
      </article>
    </section>
  );
}
