//const parameters = require("../../parameters");
const parameters = require("../../../parameters");

const getAllDesignationsSwagger = {
	tags: ["Designation"],
	description: "Get Available Designation",
	summary: "Use this API to Get Available Designation",
	operationId: "getAllDesignation",
	produces: ["application/json"],
	responses: {
		200: {
			description: "Successfully triggered the Get Designation API",
		},
	},
};

const getSingleDesignationSwagger = {
	tags: ["Designation"],
	description: "Get Particular Designation Details",
	summary: "Use this API to Get Particular Designation Details",
	operationId: "getDesignationDetailsById",
	parameters: [parameters.designationId],
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
		designation: {
			type: "String",
			example: "Manager",
		},
	},
};

const createNewDesignationSwagger = {
	tags: ["Designation"],
	description: "Create Designation",
	summary: "Use this API to create a new Designation",
	operationId: "createNewDesignation",
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
			description: "Successfully triggered the CREATE Designation API",
		},
	},
};

const updRequestBody = {
	type: "object",
	properties: {
		designation: {
			type: "String",
			example: "Manager",
		},
	},
};

const updateDesignationSwagger = {
	tags: ["Designation"],
	description: "Update Designation Detaisl",
	summary: "Use this API to update Designation",
	operationId: "updateDesignation",
	consumes: ["application/json"],
	produces: ["application/json"],
	parameters: [
		{
			name: "designationId",
			in: "path",
			description: "Designation id that needs to be Updated",
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

const deleteDesignationSwagger = {
	tags: ["Designation"],
	description: "Delete Designation Details",
	summary: "Use this API to delete existing Designation Details",
	operationId: "deleteDesignation",
	consumes: ["application/json"],
	produces: ["application/json"],
	parameters: [
		{
			name: "designationId",
			in: "path",
			description: "Designation id that needs to be Delete",
			required: true,
			type: "string",
		},
	],
	responses: {
		200: {
			description: "Successfully triggered the delete Designation API",
		},
	},
};

module.exports = {
	createNewDesignationSwagger,
	getAllDesignationsSwagger,
	updateDesignationSwagger,
	deleteDesignationSwagger,
	getSingleDesignationSwagger,
};
