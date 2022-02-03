module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'], theme: {
    extend: {
      colors: {
        cardinal: '#990000',
        'cardinal-faint': '#9A2626',
        'cardinal-strong': '#800000'
      }
    }, fontFamily: {
      sans: ['National', 'sans-serif']
    }
  }, plugins: []
};
