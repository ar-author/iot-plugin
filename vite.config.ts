import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import svgr from "vite-plugin-svgr";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [cssInjectedByJsPlugin(), react(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: `/src/index.tsx`,
      name: "iot",
      fileName: "index",
      formats: ["umd"],
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "antd",
        "ali-oss",
        "dayjs",
        "ahooks",
        "three",
        "axios",
        "icons",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "ali-oss": "OSS",
          ahooks: "ahooks",
          three: "THREE",
          dayjs: "dayjs",
          antd: "antd",
          axios: "axios",
          icons: "antdIcons",
        },
      },
    },
    cssTarget: "chrome61",
  },
  esbuild: {
    drop: process.env.BUILD_ENV === "dev" ? [] : ["console", "debugger"],
  },
});
