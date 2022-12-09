//const parameters = require("../../parameters");
const parameters = require("../../../parameters");

const getAllHouseBoatRoomTypeSwagger = {
	tags: ["HouseBoatRoomType"],
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

const getSingleHouseBoatRoomTypewagger = {
	tags: ["HouseBoatRoomType"],
	description: "Get Particular HouseBoatType Details",
	summary: "Use this API to Get Particular HouseBoatType Details",
	operationId: "getSingleHouseBoatType",
	parameters: [parameters.houseboatRoomTypeId],
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
		roomTypeName: {
			type: "String",
			example: "AC",
		},
		roomTypeCode: {
			type: "String",
			example: "AC123",
		},
	},
};

const createNewHouseBoatRoomTypeSwagger = {
	tags: ["HouseBoatRoomType"],
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
		roomTypeName: {
			type: "String",
			example: "AC",
		},
		roomTypeCode: {
			type: "String",
			example: "AC123",
		},
	},
};

const updateHouseBoatRoomTypewagger = {
	tags: ["HouseBoatRoomType"],
	description: "Update HouseBoatType Detaisl",
	summary: "Use this API to update HouseBoatType",
	operationId: "updateHBRT",
	consumes: ["application/json"],
	produces: ["application/json"],
	parameters: [
		{
			name: "houseboatRoomTypeId",
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
				"Successfully triggered the Update HouseBoatRoomType API",
		},
	},
};

const deleteHouseBoatRoomTypewagger = {
	tags: ["HouseBoatRoomType"],
	description: "Delete HouseBoatType Details",
	summary: "Use this API to delete existing HouseBoatRoomType Details",
	operationId: "deleteHBRT",
	consumes: ["application/json"],
	produces: ["application/json"],
	parameters: [
		{
			name: "houseboatRoomTypeId",
			in: "path",
			description: "HouseBoatRoomType id that needs to be Delete",
			required: true,
			type: "string",
		},
	],
	responses: {
		200: {
			description:
				"Successfully triggered the delete HouseBoatRoomType API",
		},
	},
};

module.exports = {
	createNewHouseBoatRoomTypeSwagger,
	getAllHouseBoatRoomTypeSwagger,
	updateHouseBoatRoomTypewagger,
	deleteHouseBoatRoomTypewagger,
	getSingleHouseBoatRoomTypewagger,
};
