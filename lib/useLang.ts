"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { Lang } from "./i18n";
import { i18n } from "./i18n";

const LANG_EVENT = "langchange";

export function useLang(defaultLang: Lang = "en") {
  const [lang, setLang] = useState<Lang>(defaultLang);

  // Sync across components (same tab) + across tabs (storage event)
  useEffect(() => {
    const onLangChange = (event: Event) => {
      const detail = (event as CustomEvent).detail;
      if (detail === "en" || detail === "ja") {
        setLang((prev) => (prev === detail ? prev : detail));
      }
    };

    window.addEventListener(LANG_EVENT, onLangChange as EventListener);
    return () => {
      window.removeEventListener(LANG_EVENT, onLangChange as EventListener);
    };
  }, []);

  // Save lang + update <html lang="">
  useEffect(() => {
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
