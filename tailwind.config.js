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
			boxShadow: {
				mf: "4px 4px 20px 0 rgb(15 15 15 / 10%), 0 0 4px 0 rgb(51 35 77 / 5%)",
			},
		},
	},
	plugins: [],
};
