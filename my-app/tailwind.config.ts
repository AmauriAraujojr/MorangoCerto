import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        red:{
          500:"#ef4444",
          800:"#991b1b",
          900:"#7f1d1d",
        },
        grey:{
          100:"#f5f5f5",
          400:"#a3a3a3",
          800:"#262626",
          900:"#171717",
        },
        green:{
          500:"#22c55e",
          800:"#166534"
        }
      }
      
    },
  },
  plugins: [],
};
export default config;
