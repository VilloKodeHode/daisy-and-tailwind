/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#9fff7a",

          secondary: "#2be283",

          accent: "#e5663b",

          neutral: "#1E1A23",

          "base-100": "#3B343D",

          info: "#1E8EF1",

          success: "#0C643B",

          warning: "#F8B359",

          error: "#F25464",
        },
      },
    ],
    extend: {},
  },
  plugins: [require("daisyui")],
};
