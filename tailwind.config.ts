import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			'white-40': 'rgba(255, 255, 255, 0.4)',
  			'white-50': 'rgba(255, 255, 255, 0.5)',
  			'header-title': '#F7F7F7',
  			'gray-light': '#dbdbdb',
  			'orange-sunset': '#FF8744',
  			'black': '#000000',
  			'light-blue': '#A9BFFF',
  			'light-sunset': '#D8BE7D',
  			'transparent-blue': '#78B0C9',
  			'rockon': '#666666',
  			'sunnygold': '#F8E8C1'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")]
};
export default config;
