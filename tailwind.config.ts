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
        switch: "#202020"
      }
    },
  },
  plugins: [],
};
export default config;
