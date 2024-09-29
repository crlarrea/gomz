import styles from "./bio.module.css";
import Image from "next/image";

export default function Bio() {
  return (
    <section className={styles.bio}>
      <article>
        <p>
          GOMZ, Raúl Gómez (Coria del Río, Sevilla), violinista, pianista,
          cantante y compositor. Su voz salta a la fama nada más alcanzar la
          mayoría de edad durante el talent show &ldquo;Número 1&rdquo;,
          experiencia que le llevó a telonear a James Arthur durante su gira en
          España(2014). Se mudó a Londres, donde disfrutó cantando en los Carols
          Show en Wembley Arena, entre otras múltiples actuaciones, y regresó a
          Madrid para presentar &ldquo;Tú canción&rdquo;, tema que representó a
          España en Eurovisión (2018). Desde entonces, ya como compositor
          profesional, no ha dejado de trabajar con artistas pop de referencia
          como Goodboys o Danna Paola (nominada a Latin Grammy 2021), etc.
        </p>
        <p>
          En febrero de 2020, tras retomar su carrera como artista, lanzó su
          primer EP &ldquo;07:03&rdquo;, consiguiendo sonar en radios nacionales
          como Canal Fiesta o el Global Show de Los 40 Principales, y posicionar
          sus singles en algunas de las listas de referencia en plataformas
          digitales a nivelnacional, como &ldquo;Pop con Ñ o &ldquo;Pop
          Ibérico&rdquo;, e internacional, como &ldquo;Fresh Finds&rdquo;, entre
          otras, llegando a ser elegido artista &ldquo;Up Next&rdquo;. Tras la
          publicación de su primer álbum &ldquo;Muriendo en el Cielo&rdquo; y
          arranca su primera gira en 2023.
        </p>
      </article>
      <article>
        <Image
          src="https://www.tonyaguilar.es/wp-content/archivos/unnamed-84.jpg"
          fill
        />
      </article>
    </section>
  );
}
