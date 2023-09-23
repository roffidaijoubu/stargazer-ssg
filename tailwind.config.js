/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/*.njk',
    './src/**/*.njk',
    './src/**/**/*.njk',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#17172E",
          "secondary": "#9E353A",
          "accent": "#374E56",
          "neutral": "#374E56",
          "base-100": "#fff",
          "info": "#0000ff",
          "success": "#008000",
          "warning": "#ffff00",
          "error": "#ff0000",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}

