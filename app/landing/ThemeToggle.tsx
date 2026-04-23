import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "aryan.dev.theme";

function resolveTheme(): Theme {
  if (typeof document === "undefined") {
    return "dark";
  }

  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setTheme(resolveTheme());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [mounted, theme]);

  if (!mounted) {
    return (
      <div
        aria-hidden="true"
        className="theme-toggle-shell h-[52px] w-[136px] justify-between opacity-70"
      >
        <span className="page-eyebrow">Theme</span>
        <span className="theme-toggle-track" />
      </div>
    );
  }

  return (
    <button
      type="button"
      className="theme-toggle-shell"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <span className="page-eyebrow">Theme</span>
      <span
        className={`theme-toggle-track ${theme === "light" ? "is-light" : ""}`}
      >
        <span className="theme-toggle-thumb" />
        <span className="theme-toggle-letters">
          <span>L</span>
          <span>D</span>
        </span>
      </span>
    </button>
  );
}

export default ThemeToggle;
