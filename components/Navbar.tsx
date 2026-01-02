 "use client";

import { useEffect, useState } from "react";
import { avatar, sideLinks } from "../lib/data";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const syncFromHash = () => {
      setActiveId(window.location.hash || null);
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  return (
    <nav className={styles.sideNav} aria-label="Section navigation">
      {avatar.map((item) => (
        <a key={item.label} className={styles.avatar} href={item.href}>
          {item.isImage ? (
            <img src={item.icon} alt={item.label} className={styles.avatarImage} />
          ) : (
            <span className={styles.sideIcon}>{item.icon}</span>
          )}
        </a>
      ))}
      
      {sideLinks.map((item) => (
        <a
          key={item.label}
          className={styles.sideLink}
          href={item.href}
          aria-current={activeId === item.href ? "true" : undefined}
          onClick={() => setActiveId(item.href)}
        >
          {item.isImage ? (
            <img src={item.icon} alt={item.label} className={styles.sideIconImage} />
          ) : (
            <span className={styles.sideIcon}>{item.icon}</span>
          )}
        </a>
      ))}
    </nav>
  );
}
