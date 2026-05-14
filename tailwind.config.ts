import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF7EA",
        "cream-deep": "#F6E6C9",
        cocoa: "#7A5038",
        "cocoa-soft": "#B58463",
        leaf: "#3D7A4F",
        "leaf-soft": "#E6F2E2",
        charcoal: "#2D211B"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(88, 61, 38, 0.11)",
        glow: "0 18px 50px rgba(61, 122, 79, 0.16)"
      },
      backgroundImage: {
        "warm-radial": "radial-gradient(circle at top left, rgba(255,247,234,0.95), rgba(246,230,201,0.48) 38%, rgba(255,255,255,1) 72%)"
      }
    }
  },
  plugins: []
};

export default config;
