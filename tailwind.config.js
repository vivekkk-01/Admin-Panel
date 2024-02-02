/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#9058FF",
        secondary: "#58A4FF",
        text: "#22285E",
        dark: "#212121",
        background: "#F8FAFB",
        grey: "#A0A3BD",
        purple: "#7950F2",
        published: "#0DAD82",
        publishedBackground: "#E4FFF8",
        createdBackground: "#E3D5FF",
        viewBg: "#E8E9FF"
      },
    },
  },
  plugins: [],
};
