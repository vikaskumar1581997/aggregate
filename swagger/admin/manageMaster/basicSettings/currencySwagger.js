//const parameters = require("../../parameters");
const parameters = require("../../../parameters");

const getAllCurrencysSwagger = {
	tags: ["Currency"],
	description: "Get Available Currency",
	summary: "Use this API to Get Available Currency",
	operationId: "getAllAgent",
	produces: ["application/json"],
	responses: {
		200: {
			description: "Successfully triggered the Get Currency API",
		},
	},
};

const getSingleCurrencySwagger = {
	tags: ["Currency"],
	description: "Get Particular Currency Details",
	summary: "Use this API to Get Particular Currency Details",
	operationId: "getCurrencyDetailsById",
	parameters: [parameters.currencyId],
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
		currency: {
			type: "String",
			example: "INR",
		},
		currencyCode: {
			type: "String",
			example: "91",
		},
		value: {
			type: "Number",
			example: "85",
		},
	},
};

const createNewCurrencySwagger = {
	tags: ["Currency"],
	description: "Create Currency",
	summary: "Use this API to create a new Agent",
	operationId: "createNewAgent",
	// consumes: ["application/json"],
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
			description: "Successfully triggered the CREATE Currency API",
		},
	},
};

const updRequestBody = {
	type: "object",
	properties: {
		currency: {
			type: "String",
			example: "INR",
		},
		currencyCode: {
			type: "String",
			example: "91",
		},
		value: {
			type: "Number",
			example: "85",
		},
	},
};

const updateCurrencySwagger = {
	tags: ["Currency"],
	description: "Update Agent Detaisl",
	summary: "Use this API to update Currency",
	operationId: "updateAgent",
	consumes: ["application/json"],
	produces: ["application/json"],
	parameters: [
		{
			name: "currencyId",
			in: "path",
			description: "Agent id that needs to be Updated",
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

const deleteCurrencySwagger = {
	tags: ["Currency"],
	description: "Delete Currency Details",
	summary: "Use this API to delete existing Currency Details",
	operationId: "deleteCurrency",
	consumes: ["application/json"],
	produces: ["application/json"],
	parameters: [
		{
			name: "currencyId",
			in: "path",
			description: "Currency id that needs to be Delete",
			required: true,
			type: "string",
		},
	],
	responses: {
		200: {
			description: "Successfully triggered the delete Currency API",
		},
	},
};

module.exports = {
	createNewCurrencySwagger,
	getAllCurrencysSwagger,
	updateCurrencySwagger,
	deleteCurrencySwagger,
	getSingleCurrencySwagger,
};
