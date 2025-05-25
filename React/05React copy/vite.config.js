import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			"@src": path.resolve(__dirname, "src"),
			"@components": path.resolve(__dirname, "src/components"),
		},
	},
});
