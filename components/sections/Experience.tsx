import { experience } from "../../lib/data";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <>
      <section className={styles.experience} id="techstack">
        <div className={styles.experienceWrap}>
            <div className={styles.experienceTitle}>
                <span className={styles.chevron}>{">"}</span>
                <span>Experience</span>
            </div>

            <div className={styles.experienceAllWrap}>
                <div className={styles.experienceContainer}>
                  {experience.map((exp) => (
                      <div key={exp.role} className={styles.experiencePanel}>
                        <div className={styles.timelineTitle}>
                          <div className={styles.label}>{exp.year}</div>
                          <div className={styles.role}>{exp.role}</div>
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
