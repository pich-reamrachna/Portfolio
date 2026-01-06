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
                </div>

                <div className={styles.timelineContainer}>
                    <div className={styles.yearBox}>
                        box
                    </div>
                </div>
            </div>
        </div>
      </section>

    </>
  );
}
