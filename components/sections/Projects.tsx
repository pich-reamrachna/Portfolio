"use client";

import { projects } from "../../lib/data";
import { useLang } from "../../lib/useLang";
import styles from "./Projects.module.css";

export default function Projects() {
    const { t } = useLang("en");
  return (
    <>
      <section className={styles.projects} id="projects">
        <div className={styles.projectsWrap}>
            <div className={styles.projectTitle}>
                <span className={styles.chevron}>{">"}</span>
                <span>{t("projects.title")}</span>
            </div>

            <div className={styles.projectContainer}>
                <div className={styles.Project}>
                    <div className={styles.projectArt} style={{ backgroundImage: `url(${projects[0].imageUrl})` }}>
                        <div className={styles.projectContent}>
                            <div className={styles.contentTitle}>
                                <span>{t(projects[0].title)}</span>
                                <span>{"^"}</span>
                            </div>
                            <div className={styles.contentDescription}>
                                 <span>{t(projects[0].description)}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.Project}>
                    <div className={styles.projectArt} style={{ backgroundImage: `url(${projects[1].imageUrl})` }}>
                        <div className={styles.projectContent}>
                            <div className={styles.contentTitle}>
                                <span>{t(projects[1].title)}</span>
                                <span>{"^"}</span>
                            </div>
                            <div className={styles.contentDescription}>
                                 <span>{t(projects[1].description)}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.Project}>
                    <div className={styles.projectArt} style={{ backgroundImage: `url(${projects[2].imageUrl})` }}>
                        <div className={styles.projectContent}>
                            <div className={styles.contentTitle}>
                                <span>{t(projects[2].title)}</span>
                                <span>{"^"}</span>
                            </div>
                            <div className={styles.contentDescription}>
                                 <span>{t(projects[2].description)}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
      </section>

    </>
  );
}
