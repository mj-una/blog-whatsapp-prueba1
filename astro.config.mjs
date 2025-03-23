// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	output: "static",
  site: "https://mj-una.github.io",
  base: "blog-whatsapp-prueba1",
	trailingSlash: "always",
})