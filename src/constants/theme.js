export const THEME = {
  colors: {
    background: "#020617",
    surface: "#0f172a",
    border: "#1e293b",
    text: "#f8fafc",
    muted: "#94a3b8",
    primary: "#2563eb",
    success: "#10b981",
    warning: "#f59e0b",
    danger: "#ef4444",
  },
  radius: {
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
  },
  shadows: {
    card: "0 18px 55px rgba(0,0,0,0.28)",
    soft: "0 8px 25px rgba(0,0,0,0.18)",
  },
};

export const THEME_OPTIONS = {
  dark: "dark",
  light: "light",
};

export const getStoredTheme = () => {
  if (typeof window === "undefined") return THEME_OPTIONS.dark;
  return localStorage.getItem("dinamix-theme") || THEME_OPTIONS.dark;
};

export const setStoredTheme = (theme) => {
  if (typeof window === "undefined") return;
  localStorage.setItem("dinamix-theme", theme);
  document.documentElement.setAttribute("data-theme", theme);
};
