/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/*.html"],
	theme: {
		extend: {
			backgroundColor: (theme) => ({
				...theme("colors"),
				disa: "#000",
			}),

			fontFamily: {
				sans: ["Figtree"],
			},
		},
	},
	plugins: [],
};
