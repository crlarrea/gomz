import styles from "./contact.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaTiktok } from "react-icons/fa6";
export default function Contact() {
  return (
    <>
      <article className={styles.contact}>
        <div>
          <Image
            src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/53f0fceb20290852d8d766a343fabe5d~c5_720x720.jpeg?lk3s=a5d48078&nonce=34674&refresh_token=5b1cdda450f83b06f7d5371d475ed418&x-expires=1727024400&x-signature=69zepiS9CJ%2BC2co4yj081hyLAPs%3D&shp=a5d48078&shcp=81f88b70"
            alt="gomz profile picture"
            fill
            sizes="80px"
          />
        </div>
        <ul>
          <li>
            <Link href="mailto:&#x67;&#x6f;&#x6d;&#x7a;@&#x73;&#x61;&#x6d;&#x61;&#x73;&#x61;&#x6d;&#x61;.&#x61;&#x72;&#x74;">
              &#x67;&#x6f;&#x6d;&#x7a;@&#x73;&#x61;&#x6d;&#x61;&#x73;&#x61;&#x6d;&#x61;.&#x61;&#x72;&#x74;
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/soygomz/" target="_blank">
              <FaInstagram />
            </Link>
            <Link href="https://www.tiktok.com/@soygomz" target="_blank">
              <FaTiktok />
            </Link>
          </li>
        </ul>
      </article>
    </>
  );
}
