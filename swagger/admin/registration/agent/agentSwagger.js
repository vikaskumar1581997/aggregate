//const parameters = require("../../parameters");

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
     

const addAgentSwagger = {
	tags: ["Agent"],
	description: "Create Agent Details",
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

// companyName: {
//     type: "String",
//     example: "testyantra",
// },
// shortName:  {
//     type: "String",
//     example: "testyantra",
// },
// businessType:  {
//     type: "String",
//     example: "testyantra",
// },
// companyType:  {
//     type: "String",
//     example: "testyantra",
// },
// companyCode:  {
//     type: "String",
//     example: "testyantra",
// },
// agentUrl:  {
//     type: "String",
//     example: "testyantra",
// },
// authorizedPerson_firstName:  {
//     type: "String",
//     example: "testyantra",
// },
// authorizedPerson_lastName:  {
//     type: "String",
//     example: "testyantra",
// },
// agentEmail:  {
//     type: "String",
//     example: "testyantra",
// },
// zipCode:  {
//     type: "String",
//     example: "testyantra",
// },
// mobileNumber:  {
//     type: "String",
//     example: "testyantra",
// },
// contactPerson:  {
//     type: "String",
//     example: "testyantra",
// },
// faxNumber:  {
//     type: "String",
//     example: "testyantra",
// },
// telNumber:  {
//     type: "String",
//     example: "testyantra",
// },
// country:  {
//     type: "String",
//     example: "testyantra",
// },
// province:  {
//     type: "String",
//     example: "testyantra",
// },
// city:  {
//     type: "String",
//     example: "testyantra",
// },
// address:  {
//     type: "String",
//     example: "testyantra",
// },
// markupType:  {
//     type: "String",
//     example: "testyantra",
// },
// currency:  {
//     type: "String",
//     example: "testyantra",
// },
// status: {
//     type: "String",
//     example: "Active"
// }
