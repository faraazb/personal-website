import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [
    preact({
      compat: true,
    }),
    sitemap(),
  ],
  site: "https://faraazbiyabani.me",
});
