/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			cardinal: '#990000',
			gold: '#ffcc00',
			black: '#000',
			white: '#fff',
			'dark-gray': '#777',
			'light-gray': '#ccc',
			'dark-gold': '#edb042',
			'dark-cardinal': '#8d2824',
			'accent-green': '#A4B83D',
			'accent-orange': '#D04C29',
			transparent: 'transparent'
		},
		zIndex: {
			background: 1,
			content: 2,
			overlay: 3
		},
		fontFamily: {
			sans: ['National', 'sans-serif'],
			serif: ['adobe-caslon-pro', 'serif']
		},
		extend: {
			borderWidth: {
				3: '3px'
			},
			height: {
				22: '5.5rem'
			},
			margin: {
				26: '6.5rem'
			}
		}
	},
	plugins: []
};
