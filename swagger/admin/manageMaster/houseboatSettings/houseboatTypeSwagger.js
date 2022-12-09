//const parameters = require("../../parameters");
const parameters = require("../../../parameters");

const getAllHouseBoatTypeSwagger = {
	tags: ["HouseBoatType"],
	description: "Get Available HouseBoatType",
	summary: "Use this API to Get Available HouseBoatType",
	operationId: "getAllHouseBoatType",
	produces: ["application/json"],
	responses: {
		200: {
			description: "Successfully triggered the Get HouseBoatType API",
		},
	},
};

const getSingleHouseBoatTypewagger = {
	tags: ["HouseBoatType"],
	description: "Get Particular HouseBoatType Details",
	summary: "Use this API to Get Particular HouseBoatType Details",
	operationId: "getSingleHouseBoatType",
	parameters: [parameters.houseboatTypeId],
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
		boatName: {
			type: "String",
			example: "Netravati",
		},
		boatCode: {
			type: "String",
			example: "NTR123",
		},
	},
};

const createNewHouseBoatTypeSwagger = {
	tags: ["HouseBoatType"],
	description: "Create HouseBoatType",
	summary: "Use this API to create a new HouseBoatType",
	operationId: "createNewHouseBoatType",
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
			description: "Successfully triggered the CREATE HouseBoatType API",
		},
	},
};

const updRequestBody = {
	type: "object",
	properties: {
		boatName: {
			type: "String",
			example: "Netravati",
		},
		boatCode: {
			type: "String",
			example: "NTR123",
		},
	},
};

const updateHouseBoatTypewagger = {
	tags: ["HouseBoatType"],
	description: "Update HouseBoatType Detaisl",
	summary: "Use this API to update HouseBoatType",
	operationId: "updateHBRT",
	consumes: ["application/json"],
	produces: ["application/json"],
	parameters: [
		{
			name: "houseboatTypeId",
			in: "path",
			description: "HouseBoatType id that needs to be Updated",
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
			description:
				"Successfully triggered the Update HouseBoatType API",
		},
	},
};

const deleteHouseBoatTypewagger = {
	tags: ["HouseBoatType"],
	description: "Delete HouseBoatType Details",
	summary: "Use this API to delete existing HouseBoatType Details",
	operationId: "deleteHBRT",
	consumes: ["application/json"],
	produces: ["application/json"],
	parameters: [
		{
			name: "houseboatTypeId",
			in: "path",
			description: "HouseBoatType id that needs to be Delete",
			required: true,
			type: "string",
		},
	],
	responses: {
		200: {
			description:
				"Successfully triggered the delete HouseBoatType API",
		},
	},
};

module.exports = {
	createNewHouseBoatTypeSwagger,
	getAllHouseBoatTypeSwagger,
	updateHouseBoatTypewagger,
	deleteHouseBoatTypewagger,
	getSingleHouseBoatTypewagger,
};
