/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "blue-gradient":
          "linear-gradient(180deg, rgba(182,233,251,1) 0%, rgba(212,255,255,1) 100%)",
      },
      colors: {
        "white-40": "rgba(255, 255, 255, 0.4)",
        "white-50": "rgba(255, 255, 255, 0.5)",
        "gray-light": "#dbdbdb",
        "orange-sunset": "#FF8744",
      },
    },
  },
  plugins: [],
};
