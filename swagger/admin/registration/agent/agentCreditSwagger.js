const getAgentCreditSwagger = {
	tags: ["AgentCredit"],
	description: "Get Available Agent Credit",
	summary: "Use this API to Get Available Agent Credit",
	operationId: "getAllAgent",
	produces: ["application/json"],
	responses: {
		200: {
			description: "Successfully triggered the Get Agent Credit API",
		},
	},
};

const requestBody1 = {
	type: "object",
	properties: {
		agentId: {
			type: "String",
			example: "testyantra",
		},
		creditLimits: {
			type: "String",
			example: "TY",
		},
		remarks: {
			type: "String",
			example: "software",
		},
	},
};

const addAgentCreditSwagger = {
	tags: ["AgentCredit"],
	description: "Create Agent Credit",
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
			description: "Successfully triggered the CREATE Agent Credit API",
		},
	},
};

const updRequestBody = {
	type: "object",
	properties: {
		agentId: {
			type: "String",
			example: "testyantra",
		},
		creditLimits: {
			type: "String",
			example: "TY",
		},
		remarks: {
			type: "String",
			example: "software",
		},
	},
};

const updateAgentCreditSwagger = {
	tags: ["AgentCredit"],
	description: "Update Agent Detaisl",
	summary: "Use this API to update Agent Credit",
	operationId: "updateAgent",
	consumes: ["application/json"],
	produces: ["application/json"],
	parameters: [
		{
			name: "id",
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

module.exports = {
	addAgentCreditSwagger,
	getAgentCreditSwagger,
	updateAgentCreditSwagger,
};
