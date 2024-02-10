export const accents = {
  pink: "pink",
  yellow: "yellow",
  green: "green",
} as const;

export type Accent = keyof typeof accents;
