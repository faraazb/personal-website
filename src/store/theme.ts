import { useStore } from "@nanostores/preact";
import { atom } from "nanostores";

const isSystemDarkTheme = window.matchMedia(
  "(prefers-color-scheme: dark)",
).matches;

const systemTheme = isSystemDarkTheme ? "dark" : "light";
const preferredTheme = window.sessionStorage.getItem("theme");

const activeTheme = preferredTheme ? preferredTheme : systemTheme;
export const theme = atom(activeTheme);

export const useTheme = () => useStore(theme);

export const setTheme = (t: string) => {
  theme.set(t);
  window.sessionStorage.setItem("theme", t);
};
