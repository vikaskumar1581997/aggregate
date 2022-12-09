const parameters = require("../../parameters");

const getGuestDetailsSwagger = {
	tags: ["Guest"],
	description: "Get Available Guest Details",
	summary: "Use this API to Get Available Guest Details",
	operationId: "getGuestDetailsList",
	produces: ["application/json"],
	responses: {
		200: {
			description: "Successfully triggered the Get Guest Details API",
		},
	},
};

const getGuestDetailsById = {
	tags: ["Guest"],
	description: "Get Particular Guest Details",
	summary: "Use this API to Get Particular Guest Details",
	operationId: "getGuestDetailsById",
	parameters: [parameters.guestId],
	produces: ["application/json"],
	responses: {
		200: {
			description:
				"Successfully triggered the Get Guest Details By Id API",
		},
	},
};

const requestBody1 = {
	type: "object",
	properties: {
		title: {
			type: "string",
			example: "Mr",
		},
		firstName: {
			type: "string",
			example: "neelakanth",
		},
		middleName: {
			type: "string",
			example: "aravind",
		},
		lastName: {
			type: "string",
			example: "your sirname",
		},
		nativeCountry: {
			type: "string",
			example: "india",
		},
		contactNumber: {
			type: "Number",
			example: "890412767",
		},
		emailId: {
			type: "string",
			example: "neel@gmail.com",
		},
		dob: {
			type: "String",
			example: "23/07/1996",
		},
		passportNumber: {
			type: "string",
			example: "798767676777",
		},
	},
};

const addGuestDetailsSwagger = {
	tags: ["Guest"],
	description: "Create Guest Details",
	summary: "Use this API to create a new Guest",
	operationId: "createNewGuest",
	consumes: ["application/json"],
	produces: ["application/json"],
	requestBody: {
		content: {
			"application/json": {
				schema: requestBody1,
			},
		},
		required: true,
	},
	responses: {
		200: {
			description: "Successfully triggered the CREATE Guest Details API",
		},
	},
};

const updRequestBody = {
	type: "object",
	properties: {
		title: {
			type: "string",
			example: "Mr",
		},
		firstName: {
			type: "string",
			example: "neelakanth",
		},
		middleName: {
			type: "string",
			example: "aravind",
		},
		lastName: {
			type: "string",
			example: "your sirname",
		},
		nativeCountry: {
			type: "string",
			example: "india",
		},
		contactNumber: {
			type: "Number",
			example: "890412767",
		},
		emailId: {
			type: "string",
			example: "neel@gmail.com",
		},
		dob: {
			type: "String",
			example: "23/07/1996",
		},
		passportNumber: {
			type: "string",
			example: "798767676777",
		},
	},
};

const updateGuestDetailsSwagger = {
	tags: ["Guest"],
	description: "Update Guest Detaisl",
	summary: "Use this API to update Guest Details",
	operationId: "updateGuestDetails",
	consumes: ["application/json"],
	produces: ["application/json"],
	parameters: [
		{
			name: "guestId",
			in: "path",
			description: "Guest id that needs to be Updated",
			required: true,
			type: "string",
		},
	],
	requestBody: {
		content: {
			"application/json": {
				schema: updRequestBody,
			},
		},
		required: true,
	},
	responses: {
		200: {
			description: "Successfully triggered the Update User Proile API",
		},
	},
};

const deleteGuestDetailsSwagger = {
	tags: ["Guest"],
	description: "Delete Guest Details",
	summary: "Use this API to delete existing Guest Details",
	operationId: "deleteGuestDetails",
	consumes: ["application/json"],
	produces: ["application/json"],
	parameters: [
		{
			name: "guestId",
			in: "path",
			description: "Guest id that needs to be Delete",
			required: true,
			type: "string",
		},
	],
	responses: {
		200: {
			description: "Successfully triggered the delete Guest Details API",
		},
	},
};

module.exports = {
	addGuestDetailsSwagger,
	getGuestDetailsSwagger,
	updateGuestDetailsSwagger,
	deleteGuestDetailsSwagger,
	getGuestDetailsById,
};
