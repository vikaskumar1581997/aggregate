const parameters = require("../../../parameters");

const getAllContactTypesSwagger = {
	tags: ["ContactType"],
	description: "Get Available ContactType",
	summary: "Use this API to Get Available ContactType",
	operationId: "getAllContactType",
	produces: ["application/json"],
	responses: {
		200: {
			description: "Successfully triggered the Get ContactType API",
		},
	},
};

const getSingleContactTypeSwagger = {
	tags: ["ContactType"],
	description: "Get Particular ContactType Details",
	summary: "Use this API to Get Particular ContactType Details",
	operationId: "getSingleContactType",
	parameters: [parameters.contactTypeId],
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
		contactType: {
			type: "String",
			example: "SBI",
		},
	},
};

const createNewContactTypeSwagger = {
	tags: ["ContactType"],
	description: "Create ContactType",
	summary: "Use this API to create a new ContactType",
	operationId: "createNewContactType",
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
			description: "Successfully triggered the CREATE ContactType API",
		},
	},
};

const updRequestBody = {
	type: "object",
	properties: {
		contactType: {
			type: "String",
			example: "SBI",
		},
	},
};

const updateContactTypeSwagger = {
	tags: ["ContactType"],
	description: "Update ContactType Detaisl",
	summary: "Use this API to update ContactType",
	operationId: "updateContactType",
	consumes: ["application/json"],
	produces: ["application/json"],
	parameters: [
		{
			name: "contactTypeId",
			in: "path",
			description: "ContactType id that needs to be Updated",
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

const deleteContactTypeSwagger = {
	tags: ["ContactType"],
	description: "Delete ContactType Details",
	summary: "Use this API to delete existing ContactType Details",
	operationId: "deleteContactType",
	consumes: ["application/json"],
	produces: ["application/json"],
	parameters: [
		{
			name: "contactTypeId",
			in: "path",
			description: "ContactType id that needs to be Delete",
			required: true,
			type: "string",
		},
	],
	responses: {
		200: {
			description: "Successfully triggered the delete ContactType API",
		},
	},
};

module.exports = {
	createNewContactTypeSwagger,
	getAllContactTypesSwagger,
	updateContactTypeSwagger,
	deleteContactTypeSwagger,
	getSingleContactTypeSwagger,
};
