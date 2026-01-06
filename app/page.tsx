import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import Techstack from "../components/sections/Techstack";
import Experience from "@/components/sections/Experience";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.backdrop} aria-hidden="true" />
      <div className={styles.matrix} aria-hidden="true" />
      <Navbar />
      <div className={styles.snapContainer} id="snap-root">
        <section className={styles.snapSection} id="top">
         <Hero />  
        </section>
       
        <section className={styles.snapSection} id="projects">
         <Projects />  
        </section>

        <section className={styles.snapSection} id="tech">
         <Techstack />  
        </section>

        <section className={styles.snapSection} id="experience">
         <Experience />  
        </section>

      </div>
      
    </main>
  );
}
