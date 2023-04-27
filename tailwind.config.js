import plugin from 'tailwindcss/plugin';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				//! Primary
				myPurple: 'hsl(259, 100%, 65%)',
				lightRed: 'hsl(0, 100%, 67%)',

				//! Neutral
				offWhite: 'hsl(0, 0%, 94%)',
				lightGrey: 'hsl(0, 0%, 86%)',
				smokeyGrey: 'hsl(0, 1%, 44%)',
				offBlack: 'hsl(0, 0%, 8%)'
			},
			fontFamily: {
				poppins: ['Poppins', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: [
		plugin(({ addBase }) => {
			addBase({
				'@font-face': {
					fontFamily: 'Poppins',
					fontWeight: '400',
					src: 'url("/fonts/Poppins/Poppins-Italic.ttf") format("truetype");'
				}
			});
		}),
		plugin(({ addBase }) => {
			addBase({
				'@font-face': {
					fontFamily: 'Poppins',
					fontWeight: '700',
					src: 'url("/fonts/Poppins/Poppins-Bold.ttf") format("truetype");'
				}
			});
		}),
		plugin(({ addBase }) => {
			addBase({
				'@font-face': {
					fontFamily: 'Poppins',
					fontWeight: '800',
					src: 'url("/fonts/Poppins/Poppins-ExtraBoldItalic.ttf") format("truetype");'
				}
			});
		})
	]
};
