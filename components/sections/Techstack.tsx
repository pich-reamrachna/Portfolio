import { techstack } from "../../lib/data";
import styles from "./Techstack.module.css";

export default function Techstack() {
  return (
    <>
      <section className={styles.techstack} id="techstack">
        <div className={styles.techstackWrap}>
            <div className={styles.techstackTitle}>
                <span className={styles.chevron}>{">"}</span>
                <span>Techstack</span>
            </div>

            <div className={styles.techstackAllWrap}>
                <div className={styles.techstackContainer}>
                    {techstack.map((tech) => (
                        <div key={tech.name} className={styles.techCard}>
                            <div className={styles.techCardInner}>
                                <div className={styles.techCardFront}>
                                    <div className={styles.techIcon}><img src={tech.imageUrl} /></div>
                                    <div className={styles.techName}>{tech.name}</div>
                                </div>
                                <div className={styles.techCardBack}>{tech.description}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.techstackStats}>
                    <div className={styles.statsBox}>
                        box
                    </div>
                </div>
            </div>
        </div>
      </section>

    </>
  );
}
