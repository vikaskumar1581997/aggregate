//const parameters = require("../../parameters");

const getEmployeeSwagger = {
	tags: ["Employee"],
	description: "Get Available Employee Details",
	summary: "Use this API to Get Available Employee Details",
	operationId: "getAllEmployee",
	produces: ["application/json"],
	responses: {
		200: {
			description: "Successfully triggered the Get Employee Details API",
		},
	},
};

const requestBody1 = {
	type: "object",
	properties: {
		employeeCode: {
			type: "String",
			example: "797ry2iudh287dy88",
		},
		firstName: {
			type: "String",
			example: "vikas",
		},
		lastName: {
			type: "String",
			example: "kumar",
		},
		designation: {
			type: "String",
			example: "software developer",
		},
		profileImage: {
			data: Buffer,
			contentType: "String",
			example: "",
		},
		dateOfBirth: {
			type: "String",
			example: "12/11/1990",
		},
		email: {
			type: "String",
			example: "vikas@gmail.com",
		},
		mobileNumber: {
			type: "String",
			example: "83646741234",
		},
		zipCode: {
			type: "String",
			example: "jkjk52",
		},
		faxNumber: {
			type: "String",
			example: "yu7u78899",
		},
		telNumber: {
			type: "String",
			example: "9865472894",
		},
		address: {
			type: "String",
			example: "ks layout bengalore",
		},
	},
};

const addEmployeeSwagger = {
	tags: ["Employee"],
	description: "Create Employee Details",
	summary: "Use this API to create a new Employee",
	operationId: "createNewEmployee",
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
				"Successfully triggered the CREATE Employee Details API",
		},
	},
};

const updRequestBody = {
	type: "object",
	properties: {
		employeeCode: {
			type: "String",
			example: "797ry2iudh287dy88",
		},
		firstName: {
			type: "String",
			example: "vikas",
		},
		lastName: {
			type: "String",
			example: "kumar",
		},
		designation: {
			type: "String",
			example: "software developer",
		},
		profileImage: {
			data: Buffer,
			contentType: "String",
			example: "",
		},
		dateOfBirth: {
			type: "String",
			example: "12/11/1990",
		},
		email: {
			type: "String",
			example: "vikas@gmail.com",
		},
		mobileNumber: {
			type: "String",
			example: "83646741234",
		},
		zipCode: {
			type: "String",
			example: "jkjk52",
		},
		faxNumber: {
			type: "String",
			example: "yu7u78899",
		},
		telNumber: {
			type: "String",
			example: "9865472894",
		},
		address: {
			type: "String",
			example: "ks layout bengalore",
		},
	},
};

const updateEmployeeSwagger = {
	tags: ["Employee"],
	description: "Update Employee Detaisl",
	summary: "Use this API to update Employee Details",
	operationId: "updateEmployee",
	consumes: ["application/json"],
	produces: ["application/json"],
	parameters: [
		{
			name: "id",
			in: "path",
			description: "Employee id that needs to be Updated",
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

const deleteEmployeeSwagger = {
	tags: ["Employee"],
	description: "Delete Employee Details",
	summary: "Use this API to delete existing Employee Details",
	operationId: "deleteEmployee",
	consumes: ["application/json"],
	produces: ["application/json"],
	parameters: [
		{
			name: "id",
			in: "path",
			description: "Employee id that needs to be Delete",
			required: true,
			type: "string",
		},
	],
	responses: {
		200: {
			description:
				"Successfully triggered the delete Employee Details API",
		},
	},
};

module.exports = {
	addEmployeeSwagger,
	getEmployeeSwagger,
	updateEmployeeSwagger,
	deleteEmployeeSwagger,
};

