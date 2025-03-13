'use client';

import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";


export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src="/Logo.svg" alt="Little Lemon" width={150} height={50} />
      </div>
      <button className={styles.menuButton} onClick={toggleNav}>
        ☰
      </button>
      <ul className={`${styles.navLinks} ${isNavOpen ? styles.active : ""}`}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/menu">Menu</Link></li>
        <li><Link href="/reservations">Reservations</Link></li>
        <li><Link href="/order">Order Online</Link></li>
        <li><Link href="/login">Login</Link></li>
      </ul>
    </nav>
  );
}