import styles from "./Highlights.module.css";
import Image from "next/image";
import Link from "next/link";
import buttonStyles from "../Shared/Button.module.css";

export default function Highlights() {
  return (
    <main className={styles.highlights}>
      <div className={styles.highlightHeader}>
        <h2>Specials</h2>
        <Link href="/menu">
          <button className={buttonStyles.btn}>View Menu</button>
        </Link>
      </div>
      <div className={styles.highlightMenu}>
        <div className={styles.highlightItem}>
          <Image
            src="/Bruchetta.jpeg"
            alt="Bruchetta"
            width={450}
            height={350}
          />
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
  );
}