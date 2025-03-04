import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.footerContent}>
        <div>
          <Image
            src="/restaurant.jpg"
            alt="Little Lemon"
            width={100}
            height={120}
          />
        </div>
        
        <div className={styles.footerMenu}>
          <ul>
            {['Home', 'About', 'Menu', 'Reservations', 'Order Online', 'Login'].map((item) => (
              <li key={item}>
                <Link href={`/${item.toLowerCase().replace(' ', '-')}`}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.footerContact}>
          <ul>
            {['Contact', 'Terms of Service', 'Privacy Policy'].map((item) => (
              <li key={item}>
                <Link href={`/${item.toLowerCase().replace(' ', '-')}`}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.footerSocial}>
          <ul>
            <li>
              <Link href="https://www.facebook.com">
                <FaFacebook /> Facebook
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com">
                <FaInstagram /> Instagram
              </Link>
            </li>
            <li>
              <Link href="https://www.twitter.com">
                <FaTwitter /> Twitter
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerCopy}>
        <p>&copy; 2025 Little Lemon</p>
        <p>Created by Menelaos</p>
      </div>
    </footer>
  );
}