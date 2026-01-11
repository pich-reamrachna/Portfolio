"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { Lang } from "./i18n";
import { i18n } from "./i18n";

const STORAGE_KEY = "lang";
const LANG_EVENT = "langchange";

export function useLang(defaultLang: Lang = "en") {
  const [lang, setLang] = useState<Lang>(defaultLang);

  // Load saved lang on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "ja") setLang(saved);
  }, []);

  // Sync across components (same tab) + across tabs (storage event)
  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key !== STORAGE_KEY) return;
      const next = event.newValue;
      if (next === "en" || next === "ja") {
        setLang((prev) => (prev === next ? prev : next));
      }
    };

    const onLangChange = (event: Event) => {
      const detail = (event as CustomEvent).detail;
      if (detail === "en" || detail === "ja") {
        setLang((prev) => (prev === detail ? prev : detail));
      }
    };

    window.addEventListener("storage", onStorage);
    window.addEventListener(LANG_EVENT, onLangChange as EventListener);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener(LANG_EVENT, onLangChange as EventListener);
    };
  }, []);

  // Save lang + update <html lang="">
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useMemo(() => {
    return (key: string) => (i18n as any)[lang]?.[key] ?? key;
  }, [lang]);

  const setLangShared = useCallback((next: Lang) => {
    setLang(next);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent(LANG_EVENT, { detail: next }));
    }
  }, []);

  const toggleLang = useCallback(() => {
    setLangShared(lang === "en" ? "ja" : "en");
  }, [lang, setLangShared]);

  return { lang, setLang: setLangShared, toggleLang, t };
}
