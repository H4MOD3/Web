/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      container: {
        center: true,
        padding: '22rem',
      },
      extend: {
        colors: {
          primary: "#cc00ff",
          secondary: "#0B0A1F"
        }
      },
    },
    plugins: [
      require('@tailwindcss/typography')
    ]
  }