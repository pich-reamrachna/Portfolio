"use client";

import { techstack } from "../../lib/data";
import { useLang } from "../../lib/useLang";
import styles from "./Techstack.module.css";

export default function Techstack() {
    const { t } = useLang("en");
  return (
    <>
      <section className={styles.techstack} id="techstack">
        <div className={styles.techstackWrap}>
            <div className={styles.techstackTitle}>
                <span className={styles.chevron}>{">"}</span>
                <span>{t("techstack.title")}</span>
            </div>

            <div className={styles.techstackAllWrap}>
                <div className={styles.techstackContainer}>
                    {techstack.map((tech) => (
                        <div key={tech.name} className={styles.techCard}>
                            <div className={styles.techCardInner}>
                                <div className={styles.techCardFront}>
                                    <div className={styles.techIcon}><img src={tech.imageUrl} alt="tech-icon"/></div>
                                    <div className={styles.techName}>{tech.name}</div>
                                </div>
                                <div className={styles.techCardBack}>{t(tech.description)}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.techstackStats}>
                    <div className={styles.statsBox}>
                        Skills Overview
                    </div>
                </div>
            </div>
        </div>
      </section>

    </>
  );
}
