import { z } from "astro:content";
import type { SchemaContext } from "astro:content";
import { icons } from "@icons/types";

const [firstIcon, ...otherIcons] = Object.keys(icons);

export const about = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    bio: z.string(),
    picture: z.object({
      src: image(),
      alt: z.string(),
    }),
    links: z
      .object({
        title: z.string(),
        url: z.string(),
        icon: z.enum([firstIcon, ...otherIcons]),
      })
      .array(),
  });

export type About = z.infer<ReturnType<typeof about>>;
