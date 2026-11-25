/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0A0A0C",
          secondary: "#101014",
          elevated: "#16161C",
        },
        text: {
          primary: "#F4F2F5",
          secondary: "#A8A4AE",
        },
        accent: {
          DEFAULT: "#F43F5E",
          soft: "#FB7185",
          dim: "#BE123C",
        },
        border: {
          muted: "#26262E",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        body: ['"Space Grotesk"', "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
