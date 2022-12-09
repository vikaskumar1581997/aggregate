const parameters = require("../../parameters");

const getAllAgentCategorySwagger = {
	tags: ["AgentCategory"],
	description: "Get Available AgentCategory",
	summary: "Use this API to Get Available AgentCategory",
	operationId: "getAllAgent",
	produces: ["application/json"],
	responses: {
		200: {
			description: "Successfully triggered the Get AgentCategory API",
		},
	},
};

const getSingleAgentCategorySwagger = {
	tags: ["AgentCategory"],
	description: "Get Particular AgentCategory Details",
	summary: "Use this API to Get Particular AgentCategory Details",
	operationId: "getAgentCategoryDetailsById",
	parameters: [parameters.agentCategoryId],
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
		agentCategory: {
			type: "String",
			example: "testyantra",
		},
	},
};

const createNewAgentCategorySwagger = {
	tags: ["AgentCategory"],
	description: "Create AgentCategory",
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
			description: "Successfully triggered the CREATE AgentCategory API",
		},
	},
};

const updRequestBody = {
	type: "object",
	properties: {
		agentCategory: {
			type: "String",
			example: "testyantra",
		},
	},
};

const updateAgentCategorySwagger = {
	tags: ["AgentCategory"],
	description: "Update Agent Detaisl",
	summary: "Use this API to update AgentCategory",
	operationId: "updateAgent",
	consumes: ["application/json"],
	produces: ["application/json"],
	parameters: [
		{
			name: "agentCategoryId",
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

const deleteAgentCategorySwagger = {
	tags: ["AgentCategory"],
	description: "Delete AgentCategory Details",
	summary: "Use this API to delete existing AgentCategory Details",
	operationId: "deleteAgentCategory",
	consumes: ["application/json"],
	produces: ["application/json"],
	parameters: [
		{
			name: "agentCategoryId",
			in: "path",
			description: "AgentCategory id that needs to be Delete",
			required: true,
			type: "string",
		},
	],
	responses: {
		200: {
			description: "Successfully triggered the delete AgentCategory API",
		},
	},
};

module.exports = {
	getAllAgentCategorySwagger,
	getSingleAgentCategorySwagger,
	createNewAgentCategorySwagger,
	updateAgentCategorySwagger,
	deleteAgentCategorySwagger,
};
