const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emeraldCustom: "#22c55e",
        cyanCustom: "#06b6d4",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".border-gradient-green-cyan": {
          borderWidth: "4px",
          borderStyle: "solid",
          borderImageSlice: "1",
          borderImageSource: "linear-gradient(45deg, #22c55e, #06b6d4)",
        },
      });
    }),
  ],
}
