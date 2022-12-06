module.exports = parameters = {
	guestId: {
		in: "path",
		name: "guestId",
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
	houseboatId: {
		name: "houseboatId",
		in: "path",
		description: "Houseboat Info To Search",
		required: true,
		type: "string",
	},
	agentCategoryId: {
		name: "agentCategoryId",
		in: "path",
		description: "AgentCategory Info To Search",
		required: true,
		type: "string",
	},
	bankId: {
		name: "bankId",
		in: "path",
		description: "Bank Info To Search",
		required: true,
		type: "string",
	},
	contactTypeId: {
		name: "contactTypeId",
		in: "path",
		description: "ContentTypr Info To Search",
		required: true,
		type: "string",
	}
	
};
