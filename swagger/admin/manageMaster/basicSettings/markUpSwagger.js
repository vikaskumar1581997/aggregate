//const parameters = require("../../parameters");
const parameters = require("../../../parameters");

const getAllMarkUpsSwagger = {
	tags: ["MarkUp"],
	description: "Get Available MarkUp",
	summary: "Use this API to Get Available MarkUp",
	operationId: "getAllMarkUp",
	produces: ["application/json"],
	responses: {
		200: {
			description: "Successfully triggered the Get MarkUp API",
		},
	},
};

const getSingleMarkUpSwagger = {
	tags: ["MarkUp"],
	description: "Get Particular MarkUp Details",
	summary: "Use this API to Get Particular MarkUp Details",
	operationId: "getMarkUpDetailsById",
	parameters: [parameters.markUpId],
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
		markupType: {
            type: "String",
            example:"percent"
          },
          markupName: {
            type: "String",
            example:"ten"
          },
          markupValue: {
            type: "String",
            example:"10"
          },
	},
};

const createNewMarkUpSwagger = {
	tags: ["MarkUp"],
	description: "Create MarkUp",
	summary: "Use this API to create a new MarkUp",
	operationId: "createNewMarkUp",
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
			description: "Successfully triggered the CREATE MarkUp API",
		},
	},
};

const updRequestBody = {
	type: "object",
	properties: {
		markupType: {
            type: "String",
            example:"percent"
          },
          markupName: {
            type: "String",
            example:"ten"
          },
          markupValue: {
            type: "String",
            example:"10"
          },
	},
};

const updateMarkUpSwagger = {
	tags: ["MarkUp"],
	description: "Update MarkUp Detaisl",
	summary: "Use this API to update MarkUp",
	operationId: "updateMarkUp",
	consumes: ["application/json"],
	produces: ["application/json"],
	parameters: [
		{
			name: "markUpId",
			in: "path",
			description: "MarkUp id that needs to be Updated",
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

const deleteMarkUpSwagger = {
	tags: ["MarkUp"],
	description: "Delete MarkUp Details",
	summary: "Use this API to delete existing MarkUp Details",
	operationId: "deleteMarkUp",
	consumes: ["application/json"],
	produces: ["application/json"],
	parameters: [
		{
			name: "markUpId",
			in: "path",
			description: "MarkUp id that needs to be Delete",
			required: true,
			type: "string",
		},
	],
	responses: {
		200: {
			description: "Successfully triggered the delete MarkUp API",
		},
	},
};

module.exports = {
	createNewMarkUpSwagger,
	getAllMarkUpsSwagger,
	updateMarkUpSwagger,
	deleteMarkUpSwagger,
	getSingleMarkUpSwagger,
};


