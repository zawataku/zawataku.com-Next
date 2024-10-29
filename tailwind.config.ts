import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#F7E8EA",
        "primary-content": "#FDF8F9",
        "secondary": "#FFB6C0",
        "accent": "#D0727E",
        "text": "#8B2021",
        "pastel-blue": "#73DADC",
        "pastel-green": "#AEDC5C"
      }
    },
  },
  plugins: [],
};
export default config;
