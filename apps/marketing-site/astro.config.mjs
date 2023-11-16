import { defineConfig, sharpImageService } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://astroship-pro.web3templates.com",
  image: {
    service: sharpImageService(),
    domains: ["source.unsplash.com", "images.unsplash.com"],
  },
  integrations: [tailwind(), mdx(), sitemap()],
});
