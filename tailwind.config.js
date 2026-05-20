/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx,mdx}",
    "./app/**/*.{js,jsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Geist", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
        arabic: ["var(--font-arabic)", "IBM Plex Sans Arabic", "sans-serif"],
      },
      colors: {
        neon: {
          cyan: "#00F5FF",
          purple: "#8B5CF6",
          pink: "#FF4ECD",
          green: "#00FFA3",
        },
      },
      animation: {
        "spin-slow": "spin 30s linear infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": {
            opacity: "1",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "0.8",
            transform: "scale(1.05)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
