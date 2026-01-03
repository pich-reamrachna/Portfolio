"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { heroLinks, terminalLines } from "../../lib/data";
import styles from "./Hero.module.css";

const COMMANDS: Record<string, string[]> = {
  help: [
    "Available commands:",
    "- help: show this list",
    "- about: short intro",
    "- projects: project hint",
    "- clear: clear the terminal",
  ],
  about: [
    "Hi, I'm Rachna.",
    "I build thoughtful web experiences with clean UI and playful details.",
  ],
  projects: ["Check the Projects section below or type `open projects` soon."],
};

export default function Hero() {
  const [output, setOutput] = useState<string[]>(terminalLines);
  const [input, setInput] = useState("");
  const terminalRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const prompt = useMemo(() => "visitor@rachna.portfolio:~$", []);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    terminalRef.current?.scrollTo({
      top: terminalRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [output]);

  const runCommand = (raw: string) => {
    const command = raw.trim().toLowerCase();
    if (!command) {
      return;
    }

    if (command === "clear") {
      setOutput([]);
      return;
    }

    const response = COMMANDS[command] ?? [`Command not found: ${command}`];
    setOutput((prev) => [...prev, `${prompt} ${raw}`, ...response]);
  };

  const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") {
      return;
    }

    event.preventDefault();
    const current = input;
    setInput("");
    runCommand(current);
  };

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.terminalWrap}>
          <div className={styles.terminalTitle}>
            <span className={styles.chevron}>{">"}</span>
            <span>Terminal</span>
          </div>

          <div
            className={styles.terminal}
            onClick={() => inputRef.current?.focus()}
            role="presentation"
          >
            <div className={styles.terminalBody} ref={terminalRef}>
              {output.map((line, index) => (
                <p key={`${line}-${index}`} className={styles.terminalLine}>
                  {line}
                </p>
              ))}
            </div>
            <div className={styles.terminalPrompt}>
              <span className={styles.promptUser}>visitor@rachna</span>
              <span className={styles.promptSep}>.</span>
              <span className={styles.promptHost}>portfolio</span>
              <span className={styles.promptPath}>:~$</span>
              <span className={styles.promptInputWrap}>
                <input
                  ref={inputRef}
                  className={styles.promptInput}
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={handleSubmit}
                  spellCheck={false}
                />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.heroLinks}>
        <a className={`${styles.pill} ${styles.pillPrimary}`} href={heroLinks[0].href}>
          {heroLinks[0].label}
          {heroLinks[0].isImage ? (
            <img
              src={heroLinks[0].icon}
              alt=""
              className={styles.pillIcon}
              aria-hidden="true"
            />
          ) : null}
        </a>
        <a className={`${styles.pill} ${styles.pillPrimary}`} href={heroLinks[1].href}>
          {heroLinks[1].label}
        </a>
        {heroLinks.slice(2).map((item) => (
          <a key={item.label} className={styles.pill} href={item.href}>
            {item.isImage ? (
              <img src={item.icon} alt="" className={styles.pillIcon} aria-hidden="true" />
            ) : null}
            <span>{item.label}</span>
            <span className={styles.pillArrow}>{">"}</span>
          </a>
        ))}
      </section>
    </>
  );
}
