/** @type {import('tailwindcss').Config} */
export default {
	content: ['./{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#F7931E',
				kulrang: '#EDE9E9',
			},
			fontFamily: {
				roboto: 'Roboto',
			},
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '4rem',
				sm: '3rem',
				lg: '5rem',
				xl: '6rem',
				'2xl': '7rem',
			},
		},
	},
	content: [
		'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
		'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
	  ],
	  plugins: [
		  require('flowbite/plugin')
	  ],
}
