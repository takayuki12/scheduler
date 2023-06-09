import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import uno from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), uno()],
  server: {
    port: 3000,
  },
});
