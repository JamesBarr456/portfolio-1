import type { Config } from "tailwindcss";
import tailwindScrollbar from 'tailwind-scrollbar'
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter' : ["var(--font-inter)", "sans-serif"]
      }
      ,
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [tailwindScrollbar],
} satisfies Config;