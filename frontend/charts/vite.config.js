import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "threads-sample.meta",
    port: 8000, // 使用與Meta指南相符的端口
    https: {
      key: "./threads-sample.meta-key.pem", // 使用你的SSL密鑰
      cert: "./threads-sample.meta.pem", // 使用你的SSL證書
    },
  },
});
