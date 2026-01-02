import { avatar, sideLinks } from "../lib/data";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.sideNav} aria-label="Section navigation">
      {avatar.map((item) => (
        <a key={item.label} className={styles.sideLink} href={item.href}>
          <span className={styles.sideIcon}>{item.icon}</span>
        </a>
      ))}
      
      {sideLinks.map((item) => (
        <a key={item.label} className={styles.sideLink} href={item.href}>
          <span className={styles.sideIcon}>{item.icon}</span>
        </a>
      ))}
    </nav>
  );
}
