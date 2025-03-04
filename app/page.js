'use client';

import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Home() {
      const [isNavOpen, setIsNavOpen] = useState(false);
      const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
      };
  return (
    <>
    <nav className={styles.nav}>
        <div className={styles.logo}>
      <div className={styles.logo}>
          <img src="/Logo.svg" alt="Little Lemon" width={150} height={50} />
      <img src="/Logo.svg" alt="Little Lemon" width={150} height={50} />
        </div>
      </div>
        <button className={styles.menuButton} onClick={toggleNav}>
          ☰
        </button>
        <ul className={`${styles.navLinks} ${isNavOpen ? styles.active : ""}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/order">Order Online</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>

    <main className={styles.hero}>
      <div className={styles.heroText}>
      <h1>Little Lemon</h1>
      <h2>Tirana</h2>
      <p>The best restourant in town come and try our delicious food
      The best restourant in town come and try our delicious food
      The best restourant in town come and try our delicious food
      </p>
      <Link href="/reservations">
        <button className={styles.btn}>Reserve a table</button>
      </Link>
      </div>
      <div className={styles.heroImage}>
      <Image src="/restauranfood.jpg" alt="Little Lemon" width={500} height={400} />
      </div>
    </main>

    <main className={styles.highlights}>
      <div className={styles.highlightHeader}>
      <h2>Specials</h2>
      <Link href="/menu">
        <button className={styles.btn}>View Menu</button>
      </Link>
      </div>
      <div className={styles.highlightMenu}>
      <div className={styles.highlightItem}>
        <Image src="/Bruchetta.jpeg" alt="Bruchetta" width={450} height={350} />
        <h3>Bruchetta</h3>
        <p>Our special bruchetta with fresh tomatoes and basil</p>
      </div>
      </div>
      <div className={styles.highlightMenu}>
      <div className={styles.highlightItem}>
        <Image src="/pasta.jpeg" alt="Pasta" width={450} height={350} />
        <h3>Pasta</h3>
        <p>Our special pasta with homemade tomato sauce</p>
      </div>
      </div>
      <div className={styles.highlightMenu}>
      <div className={styles.highlightItem}>
        <Image src="/tramisu.png" alt="Tiramisu" width={450} height={350} />
        <h3>Tiramisu</h3>
        <p>Our special tiramisu with homemade cream</p>
      </div>
      </div>
    </main>

    <main className={styles.testimonials}>
      <div className={styles.testimonialHeader}>
      <h2>Testimonials</h2>
      </div>
      <div className={styles.testimonialItems}>
      <div className={styles.testimonial}>
        <Image src="https://i.pravatar.cc/150?img=7" alt="Testimonial" width={100} height={100} />
        <h3>John Doe</h3>
        <p>Little Lemon is the best restourant in town, the food is delicious and the staff is very friendly</p>
      </div>
      <div className={styles.testimonial}>
        <Image src="https://i.pravatar.cc/150?img=4" alt="Testimonial" width={100} height={100} />
        <h3>Jane Doe</h3>
        <p>Little Lemon is the best restourant in town, the food is delicious and the staff is very friendly</p>
      </div>
      <div className={styles.testimonial}>
        <Image src="https://i.pravatar.cc/150?img=17" alt="Testimonial" width={100} height={100} />
        <h3>Jack Doe</h3>
        <p>Little Lemon is the best restourant in town, the food is delicious and the staff is very friendly</p>
      </div>
      <div className={styles.testimonial}>
        <Image src="https://i.pravatar.cc/150?img=23" alt="Testimonial" width={100} height={100} />
        <h3>Han Doe</h3>
        <p>Little Lemon is the best restourant in town, the food is delicious and the staff is very friendly</p>
      </div>
      </div>
    </main>
    <main className={styles.about}>
      <div className={styles.aboutText}>
      <h1>Little Lemon</h1>
      <h2>Tirana</h2>
      <p>Little Lemon is the best restourant in town, the food is delicious and the staff is very friendly</p>
      </div>
      <div className={styles.aboutImage}>
      <Image src="/mario.jpg" alt="Little Lemon" width={350} height={250} />
      <Image src="/adrian.jpg" alt="Little Lemon" width={350} height={250} />
      </div>
    </main>
    <footer className={styles.footer}>
  <div className={styles.footerContent}>
    <div>
      <Image src="/restaurant.jpg" alt="Little Lemon" width={100} height={120} />
    </div>
    <div className={styles.footerMenu}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/menu">Menu</Link>
        </li>
        <li>
          <Link href="/reservations">Reservations</Link>
        </li>
        <li>
          <Link href="/order">Order Online</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </div>
    <div className={styles.footerContact}>
      <ul>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/terms">Terms of Service</Link>
        </li>
        <li>
          <Link href="/privacy">Privacy Policy</Link>
        </li>
      </ul>
    </div>
    <div className={styles.footerSocial}>
      <ul>
        <li>
          <Link href="https://www.facebook.com"><FaFacebook />facebook</Link>
        </li>
        <li>
          <Link href="https://www.instagram.com"><FaInstagram />instagram</Link>
        </li>
        <li>
          <Link href="https://www.twitter.com"><FaTwitter />twitter</Link>
        </li>
      </ul>
    </div>
  </div>
  <div className={styles.footerCopy}>
    <p>&copy; 2025 Little Lemon</p>
    <p>Created by Menelaos</p>
  </div>
</footer>
    </>
  );
}
