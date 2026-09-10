import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark";
const STORAGE_KEY = "theme";

let current: Theme = "light";
const listeners = new Set<(t: Theme) => void>();

function apply(theme: Theme) {
  current = theme;
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
  listeners.forEach((l) => l(theme));
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(current);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    listeners.add(setTheme);
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    const initial: Theme =
      stored ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    apply(initial);
    setMounted(true);
    return () => {
      listeners.delete(setTheme);
    };
  }, []);

  const toggle = useCallback(() => {
    const next: Theme = current === "dark" ? "light" : "dark";
    localStorage.setItem(STORAGE_KEY, next);
    apply(next);
  }, []);

  return { theme, toggle, mounted };
}
