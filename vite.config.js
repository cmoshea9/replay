import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT: this must match your GitHub repository name, with slashes on both sides.
// If your repository is called "replay", leave it as is.
export default defineConfig({
  plugins: [react()],
  base: "/replay/",
});
