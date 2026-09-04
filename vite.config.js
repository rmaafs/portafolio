import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  build: {
    // Se mantiene "build" (el valor por defecto de Vite es "dist") para no tener
    // que tocar el workflow de deploy, que publica esa carpeta en gh-pages.
    outDir: "build",
    // CRA generaba los sourcemaps solo bajo demanda; aquí se dejan fuera del
    // bundle de producción igual que antes.
    sourcemap: false,
  },

  server: {
    // El puerto que usaba react-scripts, para no romper marcadores ni el
    // launch.json local.
    port: 3000,
    strictPort: false,
    open: false,
  },

  test: {
    // Sustituye a la configuración de jest que traía react-scripts.
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setupTests.jsx",
    // El proyecto todavía no tiene tests; sin esto `vitest run` saldría con
    // error y rompería el CI.
    passWithNoTests: true,
  },
});
