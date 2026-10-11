/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0B0B0B",
          secondary: "#121212",
          elevated: "#181818",
        },
        text: {
          primary: "#F2F0EC",
          secondary: "#A5A29F",
        },
        accent: "#E52532",
        border: {
          muted: "#33302F",
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', "sans-serif"],
        body: ['"Space Grotesk"', "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
      letterSpacing: {
        widest: "0.25em",
        mega: "0.4em",
      },
    },
  },
  plugins: [],
};