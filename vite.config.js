import { defineConfig } from "vite";
import postcss from "./postcss.config.js";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// const manifestForPlugIn = {
//   registerType: "prompt",
//   includeAssests: ["favicon.ico"],
//   manifest: {
//     name: "FSA Portal",
//     short_name: "fsa_portal",
//     description: "FSA Portal App",
//     icons: [
//       {
//         src: "/favicon_io/android-chrome-192x192.png",
//         sizes: "192x192",
//         type: "image/png",
//         purpose: "favicon",
//       },
//       {
//         src: "/favicon_io/android-chrome-192x192.png",
//         sizes: "512x512",
//         type: "image/png",
//         purpose: "favicon",
//       },
//       {
//         src: "/favicon_io/apple-touch-icon.png",
//         sizes: "180x180",
//         type: "image/png",
//         purpose: "apple touch icon",
//       },
//       {
//         src: "/favicon_io/favicon.ico",
//         sizes: "512x512",
//         type: "image/png",
//         purpose: "any maskable",
//       },
//     ],
//     theme_color: "#171717",
//     background_color: "#f0e7db",
//     display: "standalone",
//     scope: "/",
//     start_url: "/",
//     orientation: "portrait",
//   },
// };

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": process.env,
  },
  css: {
    postcss,
  },
  plugins: [
    react(),
    VitePWA({
      injectRegister: "auto",
      manifest: {
        name: "My Vite PWA",
        short_name: "VitePWA",
        description: "My awesome Vite Progressive Web App",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#000000",
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
  resolve: {
    alias: [
      {
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, "");
        },
      },
    ],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  // server: {
  //   https: true,
  // },
});
