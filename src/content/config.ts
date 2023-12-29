import { about } from "@sections/about/about.schema";
import { achievements } from "@sections/achievements/achievements.schema";
import { experience } from "@sections/experience/experience.schema";
import { project } from "@sections/projects/project.schema";
import { skills } from "@sections/skills/skills.schema";
import { defineCollection, z } from "astro:content";

const pagesCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      sections: z.object({
        about: about({ image }),
        skills: skills,
        experience: experience({ image }),
        achievements: achievements({ image }),
      }),
      embedUrl: z.string().optional(),
    }),
});

const projectsCollection = defineCollection({
  type: "content",
  schema: ({ image }) => project({ image }),
});

export const collections = {
  pages: pagesCollection,
  projects: projectsCollection,
};
