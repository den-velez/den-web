/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.{js,ts,jsx,tsx,mdx}',],
  theme: {
    extend: {
      colors: {
        'blackBrand': '#01040A',
        'blueBrand': '#002244',
        'blueShape': '#4D61A8',
        'lightBlue': '#183662',
        'orangeBrand': '#F64D18',
        'grayBrand':'#A3A9BD',
        'whiteBrand':'#F9F9F9',
      },
      backgroundImage: {
        'hero': "url('/backgrounds/bg-hero.png')",
        'heroMobile': "url('/backgrounds/bg-heroMobile.png')",
        'icons': "url('/backgrounds/bg-icons.png')",
      }
    },
  },
  plugins: [],
}
