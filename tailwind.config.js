/** @type {import('tailwindcss').Config} */
export default {
	content: ['./{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#454545',
			},
			fontFamily: {
				roboto: 'Manrope',
			},
		},
		container: {
			center: true,
			padding: '16px',
			screens: {
			  xl: '1332px',
			  '2xl': '1332px',
			},
		  },
	},
}
