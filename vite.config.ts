import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import prismjs from "vite-plugin-prismjs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    prismjs({
      languages: ["javascript", "css", "markup"],
      plugins: ["line-numbers", "copy-to-clipboard"],
      theme: "default",
      css: true,
    }),
  ],
});
