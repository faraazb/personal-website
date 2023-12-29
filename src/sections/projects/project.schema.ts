import { z, type SchemaContext } from "astro:content";
import { icons } from "@icons/types";

const [firstIcon, ...otherIcons] = Object.keys(icons);

export const project = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    accent: z.string().optional(),
    description: z.string(),
    picture: z.object({
      light: image(),
      dark: image(),
    }),
    links: z
      .object({
        title: z.string(),
        icon: z.enum([firstIcon, ...otherIcons]),
        url: z.string(),
      })
      .array(),
  });

export type Project = z.infer<ReturnType<typeof project>>;
