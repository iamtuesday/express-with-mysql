/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
     extend: {
        colors: {
           primary: '#056CF2',
           secondary: '#5FA4FF',
           content: '#606060',
           gray: {
              100: '#4D4D4D',
              200: '#484848',
           },
           ocean: {
              100: '#001628',
           },
        },
        fontFamily: {
           roboto: ['Roboto', 'sans-serif'],
           rubik: ['Rubik', 'sans-serif'],
           dmsans: ['DM Sans', 'sans-serif'],
        },
        screens: {
           phone: '414px',
           tablet: '768px',
           tabletlg: '960px',
           tabletxl: '1024px',
           laptop: '1200px',
           laptoplg: '1400px',
           desktop: '1700px',
        },
     },
  },
  plugins: [],
}
