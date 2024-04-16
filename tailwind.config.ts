import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Cabin: "'Cabin', 'Roboto', Arial, sans-serif"
      },
      backgroundColor: {
        "light-mode-1": "#EBEBEB",
        "light-mode-2": "#F0F0F0",
        "light-mode-3": "#CCCCCC",
        "light-mode-4": "#2C2C2C",
        "light-mode-5": "#717171",
        "dark-mode-1": "#2D2D2D",
        "dark-mode-2": "#323232",
        "dark-mode-3": "#414141",
        "dark-mode-4": "#9F9F9F",
        "red-menu": "#E70012",
        aqua: '#00FEC9'
      },
      borderColor: {
        "dark-mode-1": "#C0C0C0",
        "dark-mode-2": "#515151",
        "dark-mode-3": "#505050",
        "light-mode-1": "#666666",
        "light-mode-2": "#cecece"
      },
      colors: {
        aqua: "#00FEC9",
        blue: "#324FF0",
        aqua2: "#03B8C5",
        blue2: "#1CB1ED",
        "dark-mode-1": "#2D2D2D",
        "dark-mode-2": "#9F9F9F",
        "light-mode-1": "#EBEBEB",
        "light-text": "#2C2C2C",
        "light-text-2": "#717171",
      },
      fill: {
        "light-icon": "#2C2C2C",
        "dark-icon": "#2D2D2D",
      },
      animation: {
        border: "border 1s ease infinite"
      },
      keyframes: {
        border: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      }
    },
  },
  plugins: [],
  darkMode: 'class'
};
export default config;
