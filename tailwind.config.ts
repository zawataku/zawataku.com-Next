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
        "accent": "#CC6774",
        "text": "#8B2021",
        "pastel-blue": "#73DADC",
        "pastel-pink": "#E78071",
        "pastel-green": "#AEDC5C"
      }
    },
  },
  plugins: [],
};
export default config;
