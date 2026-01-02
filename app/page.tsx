import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.backdrop} aria-hidden="true" />
      <div className={styles.matrix} aria-hidden="true" />

      <Navbar />
      <Hero />
    </main>
  );
}
