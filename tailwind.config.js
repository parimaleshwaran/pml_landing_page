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
				kl: "0 0 0 rgba(204, 169, 44, 0.4)",
			},
			backgroundImage: {
				"regal-blue": "linear-gradient(to left, #00c9ff, #92fe9d)",
				"regal-vlog": "linear-gradient(to left, #f4d03f, #16a085)",
			},
		},
	},
	plugins: [],
};
