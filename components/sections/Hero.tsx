import { heroLinks, terminalLines } from "../../lib/data";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.terminalWrap}>
          <div className={styles.terminalTitle}>
            <span className={styles.chevron}>{">"}</span>
            <span>Terminal</span>
          </div>

          <div className={styles.terminal}>
            <div className={styles.terminalBody}>
              {terminalLines.map((line) => (
                <p key={line} className={styles.terminalLine}>
                  {line}
                </p>
              ))}
            </div>
            <div className={styles.terminalPrompt}>
              <span className={styles.promptUser}>visitor@rachna</span>
              <span className={styles.promptSep}>.</span>
              <span className={styles.promptHost}>portfolio</span>
              <span className={styles.promptPath}>:~$</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.heroLinks}>
        <a className={`${styles.pill} ${styles.pillPrimary}`} href={heroLinks[0].href}>
          {heroLinks[0].label}
        </a>
        {heroLinks.slice(1).map((item) => (
          <a key={item.label} className={styles.pill} href={item.href}>
            <span>{item.label}</span>
            <span className={styles.pillArrow}>{">"}</span>
          </a>
        ))}
      </section>
    </>
  );
}
