/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#08090B",
          900: "#0B0D10",
          800: "#111418",
          700: "#161A1F",
          600: "#1D2228",
          500: "#282E36",
          400: "#363E48",
        },
        accent: {
          DEFAULT: "#D9621F",
          50: "#FDF6F0",
          100: "#FBE8DA",
          400: "#E87836",
          500: "#D9621F",
          600: "#B84F15",
        },
        bone: {
          50: "#F5F5F4",
          100: "#E7E5E4",
          200: "#D6D3D1",
          300: "#A8A29E",
          400: "#78716C",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      letterSpacing: {
        tightest: "-0.04em",
        widest2: "0.24em",
      },
      maxWidth: {
        content: "1200px",
      },
      transitionTimingFunction: {
        eng: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
