import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "white-40": "rgba(255, 255, 255, 0.4)",
        "white-50": "rgba(255, 255, 255, 0.5)",
        "header-title": "#F7F7F7",
        "gray-light": "#dbdbdb",
        "orange-sunset": "#FF8744",
        black: "#000000",
        "light-blue": "#A9BFFF",
        "light-sunset": "#D8BE7D",
        "transparent-blue": "#78B0C9",
        rockon: "#666666",
        sunnygold: "#F8E8C1",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".custom-scrollbar": {
          "&::-webkit-scrollbar": {
            width: "3px", // Thinner scrollbar width
            height: "3px", // Thinner scrollbar width
            innerHeight: "1px",
            innerWidth: "1px",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            borderRadius: "10px",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            height: "50px", // Shorter scrollbar thumb height
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.7)",
          },
          scrollbarWidth: "thin", // Thinner scrollbar width for Firefox
          scrollbarColor: "rgba(255, 255, 255, 0.5) rgba(255, 255, 255, 0.2)",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};

export default config;
