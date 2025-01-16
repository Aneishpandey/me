import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
         'primary-50': '#e9eff3',
         'primary-100': '#ecfaf8',
         'primary-200': '#b3e9e2',
         'primary-300': '#8cdfd3',
         'primary-400': '#66d4c5',
         'primary-500': '#40c9b6',
         'primary-600': '#33a192',
         'primary-700': '#26796d',
         'primary-800': '#133c37',
         'primary-900': '#061412',
      },
    },
  },
  plugins: [],
} satisfies Config;
