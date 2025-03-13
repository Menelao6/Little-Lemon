import Image from "next/image";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const testimonials = [
    { img: 7, name: "John Doe" },
    { img: 4, name: "Jane Doe" },
    { img: 17, name: "Jack Doe" },
    { img: 23, name: "Han Doe" }
  ];

  return (
    <main id="testimonials" className={styles.testimonials}>
      <div className={styles.testimonialHeader}>
        <h2>Testimonials</h2>
      </div>
      <div className={styles.testimonialItems}>
        {testimonials.map(({ img, name }, index) => (
          <div key={index} className={styles.testimonial}>
            <Image
              src={`https://i.pravatar.cc/150?img=${img}`}
              alt="Testimonial"
              width={100}
              height={100}
            />
            <h3>{name}</h3>
            <p>
              Little Lemon is the best restaurant in town, the food is delicious
              and the staff is very friendly
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}