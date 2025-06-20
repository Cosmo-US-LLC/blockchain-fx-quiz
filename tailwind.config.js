/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // screens: {
      //   "<md": { max: "850px" },
      //   "<sm": { max: "450px" },
      // },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        "fade-in-up": "fade-in-up 0.3s ease-out",
      },
       keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
