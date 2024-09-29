import styles from "./music.module.css";
import Image from "next/image";
export default function Music() {
  return (
    <section className={styles.music}>
      <article>
        <div>
          <p>ya disponible</p>
          <p>&#171;muriendo en el cielo&#187;</p>
        </div>
        <Image
          src="https://img.bekia.es/articulos/portada/101000/101454-h1.jpg"
          fill
          alt='background image for music page'
        />
      </article>
      <article>
        <iframe
          src="https://open.spotify.com/embed/artist/7BLezVBmCyG6aFk101o7vA?utm_source=generator&theme=0"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </article>
    </section>
  );
}
