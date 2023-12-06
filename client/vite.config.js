import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    proxy: {
      "^/auth/.*": {
        target: "http://localhost:5000",
        secure: false,
        ws: true,
      },
      "^/api/.*": {
        target: "http://localhost:5000",
        secure: false,
        ws: true,
      },
     "^/stripe/.*": {
        target: "http://localhost:5000",
        secure: false,
        ws: true,
      },
    },
    port: 5173,
  },
  plugins: [react()],
});
