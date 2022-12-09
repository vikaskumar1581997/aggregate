//const parameters = require("../../parameters");
const parameters = require("../../../parameters");

const getAllHouseBoatRoomCategorysSwagger = {
	tags: ["HouseBoatRoomCategory"],
	description: "Get Available HouseBoatRoomCategory",
	summary: "Use this API to Get Available HouseBoatRoomCategory",
	operationId: "getAllHouseBoatRoomCategory",
	produces: ["application/json"],
	responses: {
		200: {
			description:
				"Successfully triggered the Get HouseBoatRoomCategory API",
		},
	},
};

const getSingleHouseBoatRoomCategorySwagger = {
	tags: ["HouseBoatRoomCategory"],
	description: "Get Particular HouseBoatRoomCategory Details",
	summary: "Use this API to Get Particular HouseBoatRoomCategory Details",
	operationId: "getHouseBoatRoomCategoryDetailsById",
	parameters: [parameters.houseboatRoomCategoryId],
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
		roomCategoryName: {
			type: "String",
			example: "Luxury",
		},
		roomCategoryCode: {
			type: "String",
			example: "lux123",
		},
		minimumRoomCount: {
			type: "Number",
			example: "1",
		},
		maximumRoomCount: {
			type: "Number",
			example: "2",
		},
	},
};

const createNewHouseBoatRoomCategorySwagger = {
	tags: ["HouseBoatRoomCategory"],
	description: "Create HouseBoatRoomCategory",
	summary: "Use this API to create a new HouseBoatRoomCategory",
	operationId: "createNewHouseBoatRoomCategory",
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
			description:
				"Successfully triggered the CREATE HouseBoatRoomCategory API",
		},
	},
};

const updRequestBody = {
	type: "object",
	properties: {
		roomCategoryName: {
			type: "String",
			example: "Luxury",
		},
		roomCategoryCode: {
			type: "String",
			example: "lux123",
		},
		minimumRoomCount: {
			type: "Number",
			example: "1",
		},
		maximumRoomCount: {
			type: "Number",
			example: "2",
		},
	},
};

const updateHouseBoatRoomCategorySwagger = {
	tags: ["HouseBoatRoomCategory"],
	description: "Update HouseBoatRoomCategory Detaisl",
	summary: "Use this API to update HouseBoatRoomCategory",
	operationId: "updateHouseBoatRoomCategory",
	consumes: ["application/json"],
	produces: ["application/json"],
	parameters: [
		{
			name: "houseboatRoomCategoryId",
			in: "path",
			description: "HouseBoatRoomCategory id that needs to be Updated",
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

const deleteHouseBoatRoomCategorySwagger = {
	tags: ["HouseBoatRoomCategory"],
	description: "Delete HouseBoatRoomCategory Details",
	summary: "Use this API to delete existing HouseBoatRoomCategory Details",
	operationId: "deleteHouseBoatRoomCategory",
	consumes: ["application/json"],
	produces: ["application/json"],
	parameters: [
		{
			name: "houseboatRoomCategoryId",
			in: "path",
			description: "HouseBoatRoomCategory id that needs to be Delete",
			required: true,
			type: "string",
		},
	],
	responses: {
		200: {
			description:
				"Successfully triggered the delete HouseBoatRoomCategory API",
		},
	},
};

module.exports = {
	createNewHouseBoatRoomCategorySwagger,
	getAllHouseBoatRoomCategorysSwagger,
	updateHouseBoatRoomCategorySwagger,
	deleteHouseBoatRoomCategorySwagger,
	getSingleHouseBoatRoomCategorySwagger,
};
