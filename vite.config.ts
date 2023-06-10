import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import uno from "unocss/vite";
import windi from "vite-plugin-windicss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), windi(), uno()],
  server: {
    port: 3000,
  },
});
