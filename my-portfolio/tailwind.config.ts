import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cardWhite: "#FFFFFF",
        cardOffWhite: "#F7F7F7",
        cardBlack: "#000000",
        deepBlack: "#0A0A0A",
        cardRed: "#C4001D",
        cardBorder: "#D0D0D0",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;