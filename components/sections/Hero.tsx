"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { heroLinks, terminalLines } from "../../lib/data";
import { useLang } from "../../lib/useLang";
import styles from "./Hero.module.css";

const COMMAND_KEYS: Record<string, string[]> = {
  help: [
    "terminal.command.help.0",
    "terminal.command.help.1",
    "terminal.command.help.2",
    "terminal.command.help.3",
    "terminal.command.help.4",
    "terminal.command.help.5",
    "terminal.command.help.6",
    "terminal.command.help.7",
  ],
  whois: [
    "terminal.command.whois.0",
    "terminal.command.whois.1",
    "terminal.command.whois.2",
    "terminal.command.whois.3",
    "terminal.command.whois.4",
  ],

  education: [
    "terminal.command.education.0",
  ],

  hobbies: [
    "terminal.command.hobbies.0",
  ],

  contact: [
    "terminal.command.contact.0",
  ],

  whoami: [
    "terminal.command.whoami.0",
  ]
};

export default function Hero() {
  const { lang, t } = useLang("en");
  const [output, setOutput] = useState<string[]>(
    terminalLines.map((line) => (line === "---" ? line : t(line)))
  );
  const [input, setInput] = useState("");
  const terminalRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const prompt = useMemo(() => "visitor@rachna.portfolio:~$", []);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  useEffect(() => {
    setOutput(terminalLines.map((line) => (line === "---" ? line : t(line))));
  }, [lang, t]);

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
      setOutput(terminalLines.map((line) => (line === "---" ? line : t(line))));
      return;
    }

    const responseKeys = COMMAND_KEYS[command];
    const response = responseKeys
      ? responseKeys.map((key) => t(key))
      : [t("terminal.commandNotFound").replace("{command}", command)];

    setOutput((prev) => [...prev, `${prompt} ${raw}`, ...response, ""]);
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
            <span>{t("hero.terminalTitle")}</span>
          </div>

          <div
            className={styles.terminal}
            onClick={() => inputRef.current?.focus()}
            role="presentation"
          >
            <div className={styles.terminalBody} ref={terminalRef}>
              {output.map((line, index) => (
                <p key={`${line}-${index}`} className={styles.terminalLine}>
                  {line === "" ? "\u00A0" : line}
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
          {t(heroLinks[0].label)}
          {heroLinks[0].isImage ? (
            <img
              src={heroLinks[0].icon}
              alt="download-icon"
              className={styles.pillIcon}
              aria-hidden="true"
            />
          ) : null}
        </a>
        <a className={`${styles.pill} ${styles.pillPrimary}`} href={heroLinks[1].href}>
          {t(heroLinks[1].label)}
        </a>
        {heroLinks.slice(2).map((item) => (
          <a key={item.icon} href={item.href} aria-label={item.label}>
            {item.isImage ? (
              <img 
              src={item.icon} 
              alt="social-icon" className={styles.socialIcon} 
              aria-hidden="true"
              style={{ width: `${item.iconSize}rem`, height: `${item.iconSize}rem` }} />
            ) : null}
          </a>
        ))}
      </section>
    </>
  );
}

