/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

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
        "black": "#000000",
        "light-blue": "#A9BFFF",
        "light-sunset": "#D8BE7D",
        "transparent-sunset": "#C28D6C",
        "rockon":"#666666"
        // "liggray-300":"#979998"
        
        
      },
      fontFamily: {
        inter: ['Inter', ...defaultTheme.fontFamily.sans],


      }
    },
  },
  plugins: [],
};
