module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "policy-red": "#E52A30",
        "brand-green": "#4DF69B",
        "brand-amber": "#FF8656",
        "brand-red": "#FF5656",
        "brand-gray": "#7E7E7E",
      },
      background: {
        "highlight": "linear-gradient(180deg,rgba(255,255,255,0) 50%, #FF5656 50%)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
