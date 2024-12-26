import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#fde68a",
        secondary: "#3322dd"
      },
    },
  },
  plugins: [],
} satisfies Config;
