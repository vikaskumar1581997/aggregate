//const parameters = require("../../parameters");

const { array } = require("../../../../helper/multer/multer");
const { schema } = require("../../../../model/userModel");

const getAgentSwagger = {
	tags: ["Agent"],
	description: "Get Available Agent Details",
	summary: "Use this API to Get Available Agent Details",
	operationId: "getAllAgent",
	produces: ["application/json"],
	responses: {
		200: {
			description: "Successfully triggered the Get Agent Details API",
		},
	},
};


const requestBody1 = {
	type: "object",
	properties: {
		companyName: {
			in: "formData",
			type: "String",
			example: "testyantra",
		},
		shortName: {
			in: "formData",
			type: "String",
			example: "TY",
		},
		businessType: { in: "formData", type: "String", example: "software" },
		companyType: { in: "formData", type: "String", example: "IT" },

		companyCode: {
			in: "formData",
			type: "String",
			example: "TY123",
		},
		agentUrl: {
			in: "formData",
			type: "String",
			example: "https://www.testyantra.com/",
		},
		authorizedPerson_firstName: {
			in: "formData",
			type: "String",
			example: "Girish",
		},
		authorizedPerson_lastName: {
			in: "formData",
			type: "String",
			example: "patil",
		},
		agentEmail: {
			in: "formData",
			type: "String",
			example: "girisg@ty.in",
		},
		zipCode: {
			in: "formData",
			type: "String",
			example: "560089",
		},
		mobileNumber: {
			in: "formData",
			type: "Number",
			example: "8904532145",
		},
		contactPerson: {
			in: "formData",
			type: "String",
			example: "Praveen",
		},
		faxNumber: {
			in: "formData",
			type: "Number",
			example: "124647654",
		},
		telNumber: {
			in: "formData",
			type: "Number",
			example: "08482698597",
		},
		country: {
			in: "formData",
			type: "String",
			example: "India",
		},
		province: {
			in: "formData",
			type: "String",
			example: "area name",
		},
		city: {
			in: "formData",
			type: "String",
			example: "Bengalore",
		},
		address: {
			in: "formData",
			type: "String",
			example: "jayanagar 4th block",
		},
		markupType: {
			in: "formData",
			type: "String",
			example: "land mark",
		},
		currency: {
			in: "formData",
			type: "String",
			example: "INR",
		},
		status: {
			in: "formData",
			type: "String",
			example: "Active",
		},
		companyLogo: {
			in: "formData",
			type: "file",
			data: "Buffer",
		},
	},
};

const addAgentSwagger = {
	tags: ["Agent"],
	description: "Create Agent Details",
	summary: "Use this API to create a new Agent",
	operationId: "createNewAgent",
	consumes: ["multipart/form-data"],
	produces: ["application/json"],
	requestBody: {
		content: {
			"multipart/form-data:": {
				schema: requestBody1,
			},
		},
		required: true,
	},
	responses: {
		200: {
			description: "Successfully triggered the CREATE Agent Details API",
		},
	},
};

const updRequestBody = {
	type: "object",
	properties: {
		companyName: {
			type: "String",
			example: "testyantra",
		},
		shortName: {
			type: "String",
			example: "TY",
		},
		businessType: {
			type: "String",
			example: "software",
		},
		companyType: {
			type: "String",
			example: "IT",
		},
		companyCode: {
			type: "String",
			example: "TY123",
		},
		agentUrl: {
			type: "String",
			example: "https://www.testyantra.com/",
		},
		authorizedPerson_firstName: {
			type: "String",
			example: "Girish",
		},
		authorizedPerson_lastName: {
			type: "String",
			example: "patil",
		},
		agentEmail: {
			type: "String",
			example: "girisg@ty.in",
		},
		zipCode: {
			type: "String",
			example: "560089",
		},
		mobileNumber: {
			type: "Number",
			example: "8904532145",
		},
		contactPerson: {
			type: "String",
			example: "Praveen",
		},
		faxNumber: {
			type: "Number",
			example: "124647654",
		},
		telNumber: {
			type: "Number",
			example: "08482698597",
		},
		country: {
			type: "String",
			example: "India",
		},
		province: {
			type: "String",
			example: "area name",
		},
		city: {
			type: "String",
			example: "Bengalore",
		},
		address: {
			type: "String",
			example: "jayanagar 4th block",
		},
		markupType: {
			type: "String",
			example: "land mark",
		},
		currency: {
			type: "String",
			example: "INR",
		},
		status: {
			type: "String",
			example: "Active",
		},
		companyLogo: {
			data: "Buffer",
			contentType: "String",
		},
	},
};

const updateAgentSwagger = {
	tags: ["Agent"],
	description: "Update Agent Detaisl",
	summary: "Use this API to update Agent Details",
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

const deleteAgentSwagger = {
	tags: ["Agent"],
	description: "Delete Agent Details",
	summary: "Use this API to delete existing Agent Details",
	operationId: "deleteAgent",
	consumes: ["application/json"],
	produces: ["application/json"],
	parameters: [
		{
			name: "id",
			in: "path",
			description: "Agent id that needs to be Delete",
			required: true,
			type: "string",
		},
	],
	responses: {
		200: {
			description: "Successfully triggered the delete Agent Details API",
		},
	},
};

module.exports = {
	addAgentSwagger,
	getAgentSwagger,
	updateAgentSwagger,
	deleteAgentSwagger,
};

// "/employee/add-employee": {
// 	"post": {
// 		"tags": ["Employee"],
// 		"parameters": [{
// 				"in": "formData",
// 				"name": "employeeID",
// 				"type": "string",
// 				"required": true,
// 				"description": "Enter Employee ID"
// 			},
// 			{
// 				"in": "formData",
// 				"name": "employeeName",
// 				"type": "string",
// 				"required": true,
// 				"description": "Enter Employee Name"
// 			},
// 			{
// 				"in": "formData",
// 				"name": "emailId",
// 				"type": "string",
// 				"required": true,
// 				"description": "Enter Employee Email Id"
// 			},
// 			{
// 				"in": "formData",
// 				"name": "designation",
// 				"type": "string",
// 				"required": true,
// 				"description": "Enter Employee Designation"
// 			},
// 			{
// 				"in": "formData",
// 				"name": "imagePath",
// 				"type": "file",
// 				"required": true,
// 				"description": "The file to upload"
// 			}
// 		],
// 		"summary": "Add new Employee",
// 		"responses": {
// 			"200": {
// 				"description": "Ok"
// 			},
// 			"400": {
// 				"description": "Bad request"
// 			},
// 			"404": {
// 				"description": "Page Not Found or File Not Found"
// 			},
// 			"401": {
// 				"description": "Unauthorized Client"
// 			}
// 		}
// 	}
// },
