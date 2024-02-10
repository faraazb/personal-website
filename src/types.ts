import { icons } from "@icons/types";
import { typedObjectKeys } from "./utils";
import { z } from "astro/zod";

export const accents = {
  pink: "pink",
  yellow: "yellow",
  green: "green",
} as const;

export type Accent = keyof typeof accents;

const [firstIcon, ...otherIcons] = typedObjectKeys(icons);
const [firstAccent, ...otherAccents] = typedObjectKeys(accents);

export const ZodIcons = z.enum([firstIcon, ...otherIcons]);
export const ZodAccents = z.enum([firstAccent, ...otherAccents]);
