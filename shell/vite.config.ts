import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "shell",
      remotes: {
        micro2: "http://localhost:4173/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 5000,
  },
});
