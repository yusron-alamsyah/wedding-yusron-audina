import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: '#fdf4f3',
          100: '#fce8e6',
          200: '#f9d5d1',
          300: '#f4b5ad',
          400: '#ec8a7f',
          500: '#e06855',
          600: '#cc4d3a',
          700: '#ab3f2f',
          800: '#8e372a',
          900: '#763429',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#3f3a3b',
          800: '#27272a',
          900: '#1f2937'
        },
        gold: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
        script: ['Great Vibes', 'cursive'],
        creattion: ['Creattion', 'Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
