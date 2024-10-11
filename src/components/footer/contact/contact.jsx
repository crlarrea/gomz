import styles from "./contact.module.css";
import Link from "next/link";
import Image from "next/image";
import {
  FaInstagram,
  FaTiktok,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";
export default function Contact() {
  return (
    <>
      <article className={styles.contact}>
        <div>
          <Image
            src="https://i.scdn.co/image/ab6761610000101fb4aad8897c2082124ce67e38"
            alt="gomz profile picture"
            fill
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
            <Link href="https://www.facebook.com/soygomz" target="_blank">
              <FaFacebookF />
            </Link>
            <Link href="https://twitter.com/soygomz" target="_blank">
              <FaXTwitter />
            </Link>
          </li>
        </ul>
      </article>
    </>
  );
}
