// micro2/vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "micro2",
      filename: "remoteEntry.js",
      exposes: {
        "./Micro2App": "./src/App.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 4173,
  },
});
