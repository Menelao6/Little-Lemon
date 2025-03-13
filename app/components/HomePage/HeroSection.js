import Link from "next/link";
import Image from "next/image";
import styles from "./HeroSection.module.css";
import buttonStyles from "../Shared/Button.module.css";

export default function HeroSection() {
  return (
    <main className={styles.hero}>
      <div className={styles.heroText}>
        <h1>Little Lemon</h1>
        <h2>Tirana</h2>
        <p>The best restaurant in town come and try our delicious food...</p>
        <Link href="/reservations">
          <button className={buttonStyles.btn}>Reserve a table</button>
        </Link>
      </div>
      <div className={styles.heroImage}>
        <Image src="/restauranfood.jpg" alt="Little Lemon" width={500} height={400} />
      </div>
    </main>
  );
}