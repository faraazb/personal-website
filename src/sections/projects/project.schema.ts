import { z, type SchemaContext } from "astro:content";
import { icons } from "@icons/types";
import { accents } from "src/types";
import { typedObjectKeys } from "src/utils";

const [firstIcon, ...otherIcons] = typedObjectKeys(icons);
const [firstAccent, ...otherAccents] = typedObjectKeys(accents);

export const project = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    accent: z.enum([firstAccent, ...otherAccents]).optional(),
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
