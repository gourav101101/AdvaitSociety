/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
      },
      colors: {
        sage: {
          DEFAULT: "#8a9a86",
          light: "#a3b19f",
          dark: "#6b7b67",
        },
        beige: "#f5f2ed",
        cream: "#fafaf8",
        forest: {
          DEFAULT: "#1e3a5f",
          light: "#2d5278",
        },
        gold: {
          DEFAULT: "#4a9eff",
          light: "#6bb3ff",
        },
      },
    },
  },
  plugins: [],
};
