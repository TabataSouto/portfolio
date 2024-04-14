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
        switch1: "#2D2D2D",
        switch2: "#323232",
        aqua: '#10C49C'
      },
      colors: {
        aqua: '#10C49C',
        switch1: "#2D2D2D",
      },
    },
  },
  plugins: [],
};
export default config;
