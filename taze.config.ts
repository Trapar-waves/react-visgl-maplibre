import { defineConfig } from "taze";

export default defineConfig({
  packageMode: {
    "/deck.gl/": "ignore",
    "/luma.gl/": "ignore",
  },
});
