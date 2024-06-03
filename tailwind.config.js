/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textShadow: {
        "blue-glow":
          "0 0 8px rgba(0, 0, 255, 0.6), 0 0 16px rgba(0, 0, 255, 0.6), 0 0 32px rgba(0, 0, 255, 0.6)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-blue-glow": {
          textShadow:
            "0 0 8px rgba(0, 0, 255, 0.6), 0 0 16px rgba(0, 0, 255, 0.6), 0 0 32px rgba(0, 0, 255, 0.6)",
        },
      });
    },
  ],
};
