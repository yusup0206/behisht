/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#204341",
          200: "#E5EF8A",
          300: "#FFFFFF",
          // 300: "#FFCCCC",
        },
      },
    },
    borderRadius: {
      none: "0px",
      custom: "20px",
      full: "100%",
    },
  },
  plugins: [],
};
