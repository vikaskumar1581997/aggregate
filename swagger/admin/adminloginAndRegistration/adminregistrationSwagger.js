const getAdminloginSwagger = {
	tags: ["Adminlogin"],
	description: "Get Available Admin",
	summary: "Use this API to Get Available Admin",
	operationId: "getAllAdmin",
	produces: ["application/json"],
	responses: {
		200: {
			description: "Successfully triggered the Get Admin API",
		},
	},
};

const requestBody1 = {
	type: "object",
	properties: {
		name: {
			type: "String",
			example: "testyantra",
			required: "true",
		},
		phone: {
			type: "Number",
			example: "8904129635",
			required: "true",
		},
		email: {
			type: "String",
			example: "test@gmail.com",
			required: "true",
		},
		password: {
			type: "String",
			example: "Test@123",
			required: "true",
		},
		role: {
			type: "String",
			default: "partner",
		},
		isDeleted: {
			type: "Boolean",
			default: false,
		},
	},
};

const adminRegistrationSwagger = {
	tags: ["Adminlogin"],
	description: "Create Admin",
	summary: "Use this API to create a new Admin",
	operationId: "adminAndPartnerRegistration",
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
			description: "Successfully triggered the CREATE Admin API",
		},
	},
};

const loginRequestBody = {
	type: "object",
	properties: {
		email: {
			type: "String",
			example: "test@gmail.com",
			required: "true",
		},
		password: {
			type: "String",
			example: "Test@123",
			required: "true",
		},
	},
};

const addAdminloginSwagger = {
	tags: ["Adminlogin"],
	description: "Create Admin",
	summary: "Use this API to create a new Admin",
	operationId: "adminAndPartnerLogin",
	// consumes: ["application/json"],
	produces: ["application/json"],
	requestBody: {
		content: {
			"application/json": {
				schema: loginRequestBody,
			},
		},
		required: true,
	},
	responses: {
		200: {
			description: "Successfully triggered the Login API",
		},
	},
};

const updRequestBody = {
	type: "object",
	properties: {
		name: {
			type: "String",
			example: "testyantra",
			required: "true",
		},
		phone: {
			type: "Number",
			example: "8904129635",
			required: "true",
		},
		email: {
			type: "String",
			example: "test@gmail.com",
			required: "true",
		},
		password: {
			type: "String",
			example: "Test@123",
			required: "true",
		},
		role: {
			type: "String",
			default: "partner",
		},
		isDeleted: {
			type: "Boolean",
			default: false,
		},
	},
};

const updateAdminloginSwagger = {
	tags: ["Adminlogin"],
	description: "Update Admin Detaisl",
	summary: "Use this API to update Admin",
	operationId: "adminAndPartnerUpdation",
	consumes: ["application/json"],
	produces: ["application/json"],
	parameters: [
		{
			name: "id",
			in: "path",
			description: "Admin id that needs to be Updated",
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
			description: "Successfully triggered the Update Admin Login API",
		},
	},
};

const deleteAdminloginSwagger = {
	tags: ["Adminlogin"],
	description: "Delete Adminlogin",
	summary: "Use this API to delete existing Adminlogin",
	operationId: "deleteGuestDetails",
	consumes: ["application/json"],
	produces: ["application/json"],
	parameters: [
		{
			name: "id",
			in: "path",
			description: "Adminlogin id that needs to be Delete",
			required: true,
			type: "string",
		},
	],
	responses: {
		200: {
			description: "Successfully triggered the delete Adminlogin API",
		},
	},
};

module.exports = {
	addAdminloginSwagger,
	getAdminloginSwagger,
	updateAdminloginSwagger,
	deleteAdminloginSwagger,
	adminRegistrationSwagger,
};
