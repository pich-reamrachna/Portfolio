"use client";

import { experience } from "../../lib/data";
import { useLang } from "../../lib/useLang";
import styles from "./Experience.module.css";

export default function Experience() {
    const { t } = useLang("en");
  return (
    <>
      <section className={styles.experience} id="experience">
        <div className={styles.experienceWrap}>
            <div className={styles.experienceTitle}>
                <span className={styles.chevron}>{">"}</span>
                <span>{t("experience.title")}</span>
            </div>

            <div className={styles.experienceAllWrap}>
                <div className={styles.experienceContainer}>
                  {experience.map((exp) => (
                      <div key={exp.role} className={styles.experiencePanel}>
                        <div className={styles.timelineTitle}>
                          <div className={styles.label}>{exp.year}</div>
                          <div className={styles.role}>{t(exp.role)}</div>
                        </div>
                        <span>{'>'}</span>
                      </div>
                      

                  ))}
                </div>

                <div className={styles.timelineContainer}>
                    <div className={styles.timelineContent}>
                        
                    </div>
                </div>
            </div>
        </div>
      </section>

    </>
  );
}
