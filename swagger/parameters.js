module.exports = parameters = {
	guestId: {
		in: "path",
		name: "id",
		description: "Guest Info To Search.",
		type: "number",
		example: "1",
	},
	hotelId: {
		name: "id",
		in: "path",
		description: "Hotel Info To Search",
		required: true,
		type: "string",
	},
};
