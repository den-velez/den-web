/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.{js,ts,jsx,tsx,mdx}',],
  theme: {
    extend: {
      colors: {
        'orangeBrand': '#F64D18',
        'blueBrand': '#002244',
        'grayBrand':'#A3A9BD',
      },
      backgroundImage: {
        'hero': "url('/backgrounds/bg-hero.svg')",
      }
    },
  },
  plugins: [],
}
