import { z } from "astro:content";
import { icons } from "@icons/types";

const [firstIcon, ...otherIcons] = Object.keys(icons);

export const skills = z.object({
  heading: z.string(),
  skills: z
    .object({
      title: z.string(),
      icon: z.enum([firstIcon, ...otherIcons]),
      mono: z.boolean().optional(),
    })
    .array(),
});

export type Skills = z.infer<typeof skills>;
