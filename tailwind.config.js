/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // Include all files in pages directory
    "./components/**/*.{js,ts,jsx,tsx}", // Include all files in components directory
    "./app/**/*.{js,ts,jsx,tsx}", // If you're using the App directory (Next.js 13+)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
