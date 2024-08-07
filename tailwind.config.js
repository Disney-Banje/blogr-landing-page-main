/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'lightRedCtaText': 'hsl(356, 100%, 66%)',
      'veryLightRedCtaHoverBg': 'hsl(355, 100%, 74%)',
      'headingsColor': 'hsl(208, 49%, 24%)',
      // background gradient Intro/CTA mobile nav:
      'veryLightRed': 'hsl(13, 100%, 72%)',
      'lightRed': 'hsl(353, 100%, 62%)',
      // Background gradient - body
      'veryDarkBlue': 'hsl(237, 17%, 21%)',
      'veryDarkDesaturedBlue': 'hsl(237, 23%, 32%)',
    },
    extend: {},
  },
  plugins: [],
}
