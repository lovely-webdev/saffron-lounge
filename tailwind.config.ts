import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'etar-bellota': ['var(--font-etar-bellota)', 'sans-serif'],
        'etar-pacifico': ['var(--font-etar-pacifico)', 'cursive'],
        'etar-menu': ['var(--font-etar-menu-quicksand)', 'sans-serif'],
        'rubik': ['var(--font-rubik)', 'sans-serif'],
        'oxygen': ['var(--font-oxygen)', 'sans-serif'],
        'playfair': ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;