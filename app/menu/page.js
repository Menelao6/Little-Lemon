import MenuList from "../components/MenuList/MenuList.js";
import Footer from "../components/HomePage/Footer.js";
import styles from "./menuPage.module.css";
import Navbar from "../components/Navbar/Navbar.js";

export default function Menu() {
  return (
    <div className={styles.container}>
      <Navbar />
      <MenuList />
      <Footer />
    </div>
  );
}