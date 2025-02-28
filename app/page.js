import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <nav className={styles.nav}>
      <div className={styles.logo}>
      <img src="/Logo.svg" alt="Little Lemon" />
      </div>

      <ul className={styles.navLinks}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/menu">Menu</a>
        </li>
        <li>
          <a href="/reservations">Reservations</a>
        </li>
        <li>
          <a href="/order">Order Online</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
          </ul>
    </nav>
    <main className="hero">
      <h1 className="tittle">Little Lemon</h1>
      <h2 className="location">Tirana</h2>
      <p className="description">The best restourant in town come and try our delicious food</p>
      <Link href="/reservations">
        <button className="btn">Reserve a table</button>
      </Link>
      <Image src="/restauranfood.jpg" alt="Little Lemon" width={850} height={650} />
    </main>
    <main className="highlights">
      <h2>Specials</h2>
      <Link href="/menu">
        <button className="btn">View Menu</button>
      </Link>
      <div className="highlightMenu">
        <Image src="/Bruchetta.svg" alt="Bruchetta" width={850} height={650} />
        <h3>Bruchetta</h3>
        <p>Our special bruchetta with fresh tomatoes and basil</p>
      </div>
      <div className="highlightMenu">
        <Image src="/pasta.jpeg" alt="Pasta" width={850} height={650} />
        <h3>Pasta</h3>
        <p>Our special pasta with homemade tomato sauce</p>
      </div>
      <div className="highlightMenu">
        <Image src="/tramisu.png" alt="Tiramisu" width={850} height={650} />
        <h3>Tiramisu</h3>
        <p>Our special tiramisu with homemade cream</p>
      </div>
    </main>
    <main className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial">
        <Image src="/testimonial1.jpg" alt="Testimonial" width={850} height={650} />
        <p>Little Lemon is the best restourant in town, the food is delicious and the staff is very friendly</p>
        <h3>John Doe</h3>
      </div>
      <div className="testimonial">
        <Image src="/testimonial2.jpg" alt="Testimonial" width={850} height={650} />
        <p>Little Lemon is the best restourant in town, the food is delicious and the staff is very friendly</p>
        <h3>Jane Doe</h3>
      </div>
      <div className="testimonial">
        <Image src="/testimonial3.jpg" alt="Testimonial" width={850} height={650} />
        <p>Little Lemon is the best restourant in town, the food is delicious and the staff is very friendly</p>
        <h3>Jack Doe</h3>
      </div>
    </main>
    <main className="about">
      <h2>About Us</h2>
      <p>Little Lemon is the best restourant in town, the food is delicious and the staff is very friendly</p>
      <Image src="/mario.jpg" alt="Little Lemon" width={850} height={650} />
      <Image src="/adrian.jpg" alt="Little Lemon" width={850} height={650} />
    </main> 
    <footer className="footer">
      <p>&copy; 2025 Little Lemon</p>
      <p>Created by Menelaos</p>
    </footer>
    </>
  );
}
