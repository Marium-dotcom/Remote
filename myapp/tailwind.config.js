/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./src/app/**/*/.{tsx,jsx,js,ts}",
        "./node_modules/flowbite/**/*.js",
        "./public/**/*.html",



 
    // Or if using `src` directory:
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}