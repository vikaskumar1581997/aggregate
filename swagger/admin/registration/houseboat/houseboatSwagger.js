const parameters = require("../../../parameters");

const getHouseboatSwagger = {
	tags: ["HouseBoat"],
	description: "Get Available Houseboat Details",
	summary: "Use this API to Get Available Houseboat Details",
	operationId: "getAllHouseBoat",
	produces: ["application/json"],
	responses: {
		200: {
			description: "Successfully triggered the Get Houseboat Details API",
		},
	},
};

const getHouseboatById = {
	tags: ["HouseBoat"],
	description: "Get Particular Houseboat Details",
	summary: "Use this API to Get Particular Houseboat Details",
	operationId: "getSingleHouseBoat",
	parameters: [parameters.houseboatId],
	produces: ["application/json"],
	responses: {
		200: {
			description:
				"Successfully triggered the Get Houseboat Details By Id API",
		},
	},
};

const requestBody1 = {
	type: "object",
	properties: {
		houseBoatName: {
			type: "String",
			example: "Nisarga",
		},
		category: {
			type: "String",
			example: "Clasic",
		},
		boatType: {
			type: "String",
			example: "Normal",
		},
		status: {
			type: "String",
			example: "Active",
		},
		contactPerson: {
			type: "String",
			example: "Suhas",
		},
		contactEmail: {
			type: "String",
			example: "nisargaboathouse@gmail.com",
		},
		contactMobile: {
			type: "String",
			example: "7589426358",
		},
		description: {
			type: "String",
			example: "very nice",
		},
		country: {
			type: "String",
			example: "India",
		},
		state: {
			type: "String",
			example: "Karnataka",
		},
		place: {
			type: "String",
			example: "Bengalore",
		},
		emiDetails: {
			type: "String",
			example: "6 months no cost EMI",
		},
		weekDays: {
			type: "object",
			properties: {
				sunday: {
					type: "Boolean",
					example: "yes",
				},
				monday: {
					type: "Boolean",
					example: "yes",
				},
				tuesday: {
					type: "Boolean",
					example: "yes",
				},
				wednesday: {
					type: "Boolean",
					example: "yes",
				},
				thursday: {
					type: "Boolean",
					example: "yes",
				},
				friday: {
					type: "Boolean",
					example: "yes",
				},
				saturday: {
					type: "Boolean",
					example: "yes",
				},
			},
		},
		weekEndDays: {
			type: "object",
			properties: {
				sunday: {
					type: "Boolean",
					example: "yes",
				},
				monday: {
					type: "Boolean",
					example: "yes",
				},
				tuesday: {
					type: "Boolean",
					example: "yes",
				},
				wednesday: {
					type: "Boolean",
					example: "yes",
				},
				thursday: {
					type: "Boolean",
					example: "yes",
				},
				friday: {
					type: "Boolean",
					example: "yes",
				},
				saturday: {
					type: "Boolean",
					example: "yes",
				},
			},
		},
		room: {
			type: "object",
			properties: {
				roomCategory: {
					type: "String",
					example: "clasic",
				},
				roomType: {
					type: ["String"],
					example: "Ac",
				},
			},
		},
		childComplimentaryAge: {
			type: "object",
			properties: {
				min: {
					type: "Number",
					example: "1",
				},
				max: {
					type: "Number",
					example: "5",
				},
			},
		},
		childChargeableAge: {
			type: "object",
			properties: {
				minAge: {
					type: "Number",
					example: "1",
				},
				maxAge: {
					type: "Number",
					example: "3",
				},
			},
		},
		inclusion: {
			type: ["String"],
			example: ["couple friendly", "best rated in indursty"],
		},
		exclusion: {
			type: ["String"],
			example: [
				"out side food are not allowed",
				"out side drinks are not allowed",
			],
		},
		termsAndConditions: {
			type: ["String"],
			example: [
				"need to provide id card",
				"Inside Room Smoking is Not Allowed",
			],
		},
		houseBoatHighlights: {
			type: "String",
			example: "100m",
		},
	},
};

const addHouseboatSwagger = {
	tags: ["HouseBoat"],
	description: "Create Houseboat Details",
	summary: "Use this API to create a new Houseboat",
	operationId: "createNewHouseBoat",
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
			description:
				"Successfully triggered the CREATE Houseboat Details API",
		},
	},
};

const updRequestBody = {
	type: "object",
	properties: {
		houseBoatName: {
			type: "String",
			example: "Nisarga",
		},
		category: {
			type: "String",
			example: "Clasic",
		},
		boatType: {
			type: "String",
			example: "Normal",
		},
		status: {
			type: "String",
			example: "Active",
		},
		contactPerson: {
			type: "String",
			example: "Suhas",
		},
		contactEmail: {
			type: "String",
			example: "nisargaboathouse@gmail.com",
		},
		contactMobile: {
			type: "String",
			example: "7589426358",
		},
		description: {
			type: "String",
			example: "very nice",
		},
		country: {
			type: "String",
			example: "India",
		},
		state: {
			type: "String",
			example: "Karnataka",
		},
		place: {
			type: "String",
			example: "Bengalore",
		},
		emiDetails: {
			type: "String",
			example: "6 months no cost EMI",
		},
		weekDays: {
			type: "object",
			properties: {
				sunday: {
					type: "Boolean",
					example: "yes",
				},
				monday: {
					type: "Boolean",
					example: "yes",
				},
				tuesday: {
					type: "Boolean",
					example: "yes",
				},
				wednesday: {
					type: "Boolean",
					example: "yes",
				},
				thursday: {
					type: "Boolean",
					example: "yes",
				},
				friday: {
					type: "Boolean",
					example: "yes",
				},
				saturday: {
					type: "Boolean",
					example: "yes",
				},
			},
		},
		weekEndDays: {
			type: "object",
			properties: {
				sunday: {
					type: "Boolean",
					example: "yes",
				},
				monday: {
					type: "Boolean",
					example: "yes",
				},
				tuesday: {
					type: "Boolean",
					example: "yes",
				},
				wednesday: {
					type: "Boolean",
					example: "yes",
				},
				thursday: {
					type: "Boolean",
					example: "yes",
				},
				friday: {
					type: "Boolean",
					example: "yes",
				},
				saturday: {
					type: "Boolean",
					example: "yes",
				},
			},
		},
		room: {
			type: "object",
			properties: {
				roomCategory: {
					type: "String",
					example: "clasic",
				},
				roomType: {
					type: ["String"],
					example: "Ac",
				},
			},
		},
		childComplimentaryAge: {
			type: "object",
			properties: {
				min: {
					type: "Number",
					example: "1",
				},
				max: {
					type: "Number",
					example: "5",
				},
			},
		},
		childChargeableAge: {
			type: "object",
			properties: {
				min: {
					type: "Number",
					example: "1",
				},
				max: {
					type: "Number",
					example: "3",
				},
			},
		},
		inclusion: {
			type: ["String"],
			example: ["couple friendly", "best rated in indursty"],
		},
		exclusion: {
			type: ["String"],
			example: [
				"out side food are not allowed",
				"out side drinks are not allowed",
			],
		},
		termsAndConditions: {
			type: ["String"],
			example: [
				"need to provide id card",
				"Inside Room Smoking is Not Allowed",
			],
		},
		houseBoatHighlights: {
			type: "String",
			example: "100m",
		},
	},
};

const updateHouseboatSwagger = {
	tags: ["HouseBoat"],
	description: "Update Houseboat Detaisl",
	summary: "Use this API to update Houseboat Details",
	operationId: "updateHouseBoat",
	consumes: ["application/json"],
	produces: ["application/json"],
	parameters: [
		{
			name: "id",
			in: "path",
			description: "Houseboat id that needs to be Updated",
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

const deleteHouseboatSwagger = {
	tags: ["HouseBoat"],
	description: "Delete Houseboat Details",
	summary: "Use this API to delete existing Houseboat Details",
	operationId: "deleteHouseBoat",
	consumes: ["application/json"],
	produces: ["application/json"],
	parameters: [
		{
			name: "houseboatId",
			in: "path",
			description: "Houseboat id that needs to be Delete",
			required: true,
			type: "string",
		},
	],
	responses: {
		200: {
			description:
				"Successfully triggered the delete Houseboat Details API",
		},
	},
};

module.exports = {
	addHouseboatSwagger,
	getHouseboatById,
	updateHouseboatSwagger,
	deleteHouseboatSwagger,
	getHouseboatSwagger,
};


