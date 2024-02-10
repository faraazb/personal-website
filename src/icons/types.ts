import { GitHub } from "./GitHub";
import { Hamburger } from "./Hamburger";
import { JavaScript } from "./JavaScript";
import { LinkedIn } from "./LinkedIn";
import { Mail } from "./Mail";
import { Moon } from "./Moon";
import { Sun } from "./Sun";
import { DateRange } from "./DateRange";
import { Building } from "./Building";
import { X } from "./X";
import { YouTube } from "./YouTube";
import { TypeScript } from "./TypeScript";
import { Database } from "./Database";
import { HTML } from "./HTML";
import { CSS } from "./CSS";
import { Python } from "./Python";
import { React } from "./React";
import { Flask } from "./Flask";
import { Git } from "./Git";
import { GraphQL } from "./GraphQL";
import { PaperPlane } from "./PaperPlane";

export const icons = {
  github: GitHub,
  linkedin: LinkedIn,
  youtube: YouTube,
  mail: Mail,
  sun: Sun,
  moon: Moon,
  building: Building,
  dateRange: DateRange,
  hamburger: Hamburger,
  javascript: JavaScript,
  x: X,
  typescript: TypeScript,
  database: Database,
  git: Git,
  react: React,
  html: HTML,
  css: CSS,
  flask: Flask,
  python: Python,
  graphql: GraphQL,
  paperPlane: PaperPlane,
} as const;

export type Name = keyof typeof icons;
