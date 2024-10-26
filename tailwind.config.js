/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}", // All pages
      "./components/**/*.{js,ts,jsx,tsx}", // All components
      "./app/**/*.{js,ts,jsx,tsx}", // If you're using the App directory (Next.js 13+)
    ],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
