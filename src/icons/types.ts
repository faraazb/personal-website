import { GitHub } from "./GitHub";
import { Hamburger } from "./Hamburger";
import { JavaScript } from "./JavaScript";
import { LinkedIn } from "./LinkedIn";
import { Mail } from "./Mail";
import { Moon } from "./Moon";
import { Sun } from "./Sun";
import { DateRange } from "./DateRange";
import { Building } from "./Building";

export const icons = {
  github: GitHub,
  linkedin: LinkedIn,
  youtube: LinkedIn,
  mail: Mail,
  sun: Sun,
  moon: Moon,
  building: Building,
  dateRange: DateRange,
  hamburger: Hamburger,
  javascript: JavaScript,
} as const;

export type Name = keyof typeof icons;
