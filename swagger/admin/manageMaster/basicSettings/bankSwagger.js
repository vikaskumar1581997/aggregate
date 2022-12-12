//const parameters = require("../../parameters");
const parameters = require("../../../parameters");

const getAllBanksSwagger = {
	tags: ["Bank"],
	description: "Get Available Bank",
	summary: "Use this API to Get Available Bank",
	operationId: "getAllBank",
	produces: ["application/json"],
	responses: {
		200: {
			description: "Successfully triggered the Get Bank API",
		},
	},
};

const getSingleBankSwagger = {
	tags: ["Bank"],
	description: "Get Particular Bank Details",
	summary: "Use this API to Get Particular Bank Details",
	operationId: "getBankDetailsById",
	parameters: [parameters.bankId],
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
		bank: {
			type: "String",
			example: "SBI",
		},
	},
};

const createNewBankSwagger = {
	tags: ["Bank"],
	description: "Create Bank",
	summary: "Use this API to create a new Bank",
	operationId: "createNewBank",
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
			description: "Successfully triggered the CREATE Bank API",
		},
	},
};

const updRequestBody = {
	type: "object",
	properties: {
		bank: {
			type: "String",
			example: "SBI",
		},
	},
};

const updateBankSwagger = {
	tags: ["Bank"],
	description: "Update Bank Detaisl",
	summary: "Use this API to update Bank",
	operationId: "updateBank",
	consumes: ["application/json"],
	produces: ["application/json"],
	parameters: [
		{
			name: "BankId",
			in: "path",
			description: "Bank id that needs to be Updated",
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

const deleteBankSwagger = {
	tags: ["Bank"],
	description: "Delete Bank Details",
	summary: "Use this API to delete existing Bank Details",
	operationId: "deleteBank",
	consumes: ["application/json"],
	produces: ["application/json"],
	parameters: [
		{
			name: "BankId",
			in: "path",
			description: "Bank id that needs to be Delete",
			required: true,
			type: "string",
		},
	],
	responses: {
		200: {
			description: "Successfully triggered the delete Bank API",
		},
	},
};

module.exports = {
	createNewBankSwagger,
	getAllBanksSwagger,
	updateBankSwagger,
	deleteBankSwagger,
	getSingleBankSwagger,
};
