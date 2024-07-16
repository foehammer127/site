/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./blog/**/*.html"],
  theme: {
    extend: {
		fontFamily: {
			serif: ["Libre Baskerville", "serif"],
			mono: ["Roboto Mono", "monospace"],
			startup: ["serif"],
		},
	},
  },
  plugins: [],
}

