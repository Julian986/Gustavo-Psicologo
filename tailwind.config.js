/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poppins", "ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
			},
			keyframes: {
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
				slideUp: {
					"0%": { opacity: 0, transform: "translateY(16px)" },
					"100%": { opacity: 1, transform: "translateY(0)" },
				},
			},
			animation: {
				fadeIn: "fadeIn 300ms ease-out both",
				slideUp: "slideUp 700ms ease-out both",
			},
		},
	},
	plugins: [],
}


