 "use client";

import { useEffect, useState } from "react";
import { avatar, sideLinks } from "../lib/data";
import { useLang } from "../lib/useLang";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { lang, toggleLang, t } = useLang("en");
  const [activeId, setActiveId] = useState<string | null>(null);
  const navLinks = [...avatar, ...sideLinks];

  // Sync ActiveId with URL hash on mount and hash change
  useEffect(() => {
    const syncFromHash = () => {
      setActiveId(window.location.hash || null);
    };

    syncFromHash(); // initialize ActiveId on mount from hash
    window.addEventListener("hashchange", syncFromHash); // update ActiveId when hash changes
    return () => window.removeEventListener("hashchange", syncFromHash); // cleanup previous reference
  }, []);

  // Hash changes according to Active Hash
  useEffect(() => {
    if (!activeId || !activeId.startsWith("#")) {
      return;
    }

    if (window.location.hash !== activeId) {
      history.replaceState(null, "", activeId);
    }
  }, [activeId]);

  // Scroll-Spy Effect 
  // Update ActiveId based on the visible section
  useEffect(() => {
    const ids = navLinks
      .map((link) => link.href)
      .filter((href) => href.startsWith("#"));
    const sections = ids
      .map((hash) => document.querySelector(hash))
      .filter((el): el is Element => Boolean(el));

    if (!sections.length) {
      return;
    }

    const root = document.querySelector("#snap-root");
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveId(`#${visible[0].target.id}`);
        }
      },
      {
        root: root ?? null,
        threshold: [0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [navLinks]);

  return (
    <nav className={styles.sideNav} aria-label="Section navigation">
      {avatar.map((item) => (
        <a 
          key={item.label} 
          className={styles.avatar} 
          href={item.href}
          aria-current={activeId === item.href ? "true" : undefined}
          onClick={() => setActiveId(item.href)}
          aria-label={t(item.label)}
        >
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
          aria-current={activeId === item.href ? "true" : undefined} //aria-current is set to true so CSS can style the active link
          onClick={() => setActiveId(item.href)}
          aria-label={t(item.label)}
          title={t(item.label)}
        >
          {item.isImage ? (
            <img src={item.icon} alt={item.label} className={styles.sideIconImage} />
          ) : (
            <span className={styles.sideIcon}>{item.icon}</span>
          )}
        </a>
      ))}

      <button
        type="button"
        className={styles.langToggle}
        onClick={toggleLang}
        aria-label="Toggle language"
      >
        {lang === "en" ? "EN" : "JP"}
      </button>
    </nav>
  );
}
