import styles from "./music.module.css";

export default function Music() {
  return (
    <section className={styles.music}>
      <article>
        <iframe
          src="https://open.spotify.com/embed/artist/7BLezVBmCyG6aFk101o7vA?utm_source=generator&theme=0"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </article>
      <article>
        <div>
          <p>ya disponible</p>
          <p>&#171;muriendo en el cielo&#187;</p>
        </div>
      </article>
    </section>
  );
}
