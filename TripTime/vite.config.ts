import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import webSpatial from "@webspatial/vite-plugin";
import { createHtmlPlugin } from "vite-plugin-html";
import basicSsl from "@vitejs/plugin-basic-ssl";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react({
      jsxImportSource: '@webspatial/react-sdk'
    }),
    basicSsl(),
    webSpatial({
      outputDir: ""
    }),
    createHtmlPlugin({
      inject: {
        data: {
          XR_ENV: process.env.XR_ENV,
        },
      },
    }),
  ],
  define: {
    __XR_ENV_BASE__: JSON.stringify(process.env.VITE_BASE || "/"),
  },
});