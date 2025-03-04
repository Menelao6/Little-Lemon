import Image from "next/image";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <main id="about" className={styles.about}>
      <div className={styles.aboutText}>
        <h1>Little Lemon</h1>
        <h2>Tirana</h2>
        <p>
          Little Lemon is the best restaurant in town, the food is delicious
          and the staff is very friendly
        </p>
      </div>
      <div className={styles.aboutImage}>
        <Image
          src="/mario.jpg"
          alt="Chef Mario"
          width={350}
          height={250}
          className={styles.aboutImageMain}
        />
        <Image
          src="/adrian.jpg"
          alt="Chef Adrian"
          width={350}
          height={250}
          className={styles.aboutImageOverlay}
        />
      </div>
    </main>
  );
}