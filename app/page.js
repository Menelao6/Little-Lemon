'use client';

import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useState } from "react";

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <img src="/Logo.svg" alt="Little Lemon" width={150} height={50} />
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
          <p>The best restaurant in town come and try our delicious food. The best restaurant in town come and try our delicious food.</p>
          <Link href="/reservations"><button className={styles.btn}>Reserve a table</button></Link>
        </div>
        <div className={styles.heroImage}>
          <Image src="/restauranfood.jpg" alt="Little Lemon" width={500} height={400} />
        </div>
      </main>

      <main className={styles.highlights}>
        <div className={styles.highlightHeader}>
          <h2>Specials</h2>
          <Link href="/menu"><button className={styles.btn}>View Menu</button></Link>
        </div>
        <div className={styles.highlightMenu}>
          <div className={styles.highlightItem}>
            <Image src="/Bruchetta.jpeg" alt="Bruchetta" width={450} height={350} />
            <h3>Bruchetta</h3>
            <p>Our special bruchetta with fresh tomatoes and basil</p>
          </div>
          <div className={styles.highlightItem}>
            <Image src="/pasta.jpeg" alt="Pasta" width={450} height={350} />
            <h3>Pasta</h3>
            <p>Our special pasta with homemade tomato sauce</p>
          </div>
          <div className={styles.highlightItem}>
            <Image src="/tramisu.png" alt="Tiramisu" width={450} height={350} />
            <h3>Tiramisu</h3>
            <p>Our special tiramisu with homemade cream</p>
          </div>
        </div>
      </main>

      <main className={styles.testimonials}>
        <div className={styles.testimonialHeader}><h2>Testimonials</h2></div>
        <div className={styles.testimonialItems}>
          {[7, 4, 17, 23].map((imgNum, index) => (
            <div key={index} className={styles.testimonial}>
              <Image src={`https://i.pravatar.cc/150?img=${imgNum}`} alt="Testimonial" width={100} height={100} />
              <h3>{['John Doe', 'Jane Doe', 'Jack Doe', 'Han Doe'][index]}</h3>
              <p>Little Lemon is the best restaurant in town, the food is delicious and the staff is very friendly</p>
            </div>
          ))}
        </div>
      </main>

      <main className={styles.about}>
        <div className={styles.aboutText}>
          <h1>Little Lemon</h1>
          <h2>Tirana</h2>
          <p>Little Lemon is the best restaurant in town, the food is delicious and the staff is very friendly</p>
        </div>
        <div className={styles.aboutImage}>
          <Image src="/mario.jpg" alt="Chef Mario" width={350} height={250} />
          <Image src="/adrian.jpg" alt="Chef Adrian" width={350} height={250} />
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div><Image src="/restaurant.jpg" alt="Little Lemon" width={100} height={120} /></div>
          <div className={styles.footerMenu}>
            <ul>
              {['Home', 'About', 'Menu', 'Reservations', 'Order Online', 'Login'].map((item) => (
                <li key={item}><Link href={`/${item.toLowerCase()}`}>{item}</Link></li>
              ))}
            </ul>
          </div>
          <div className={styles.footerContact}>
            <ul>
              {['Contact', 'Terms of Service', 'Privacy Policy'].map((item) => (
                <li key={item}><Link href={`/${item.toLowerCase()}`}>{item}</Link></li>
              ))}
            </ul>
          </div>
          <div className={styles.footerSocial}>
            <ul>
              <li><Link href="https://www.facebook.com"><FaFacebook /> Facebook</Link></li>
              <li><Link href="https://www.instagram.com"><FaInstagram /> Instagram</Link></li>
              <li><Link href="https://www.twitter.com"><FaTwitter /> Twitter</Link></li>
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