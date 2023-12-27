import { about } from "@sections/about/about.schema";
import { experience } from "@sections/experience/experience.schema";
import { skills } from "@sections/skills/skills.schema";
import { defineCollection, z } from "astro:content";

const pagesCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      sections: z
        .object({
          about: about({ image }),
          skills: skills,
          experience: experience({ image }),
        })
        .optional(),
      embedUrl: z.string().optional(),
    }),
});

export const collections = {
  pages: pagesCollection,
};
