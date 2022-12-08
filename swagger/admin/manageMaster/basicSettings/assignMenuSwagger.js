const parameters = require("../../../parameters");

const getAllAssignMenusSwagger = {
	tags: ["AssignMenu"],
	description: "Get Available AssignMenu",
	summary: "Use this API to Get Available AssignMenu",
	operationId: "getAllAgent",
	produces: ["application/json"],
	responses: {
		200: {
			description: "Successfully triggered the Get AssignMenu API",
		},
	},
};

const getSingleAssignMenuSwagger = {
	tags: ["AssignMenu"],
	description: "Get Particular AssignMenu Details",
	summary: "Use this API to Get Particular AssignMenu Details",
	operationId: "getAssignMenuDetailsById",
	parameters: [parameters.assignMenuId],
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
		roleName: {
			type: "String",
			example: "Maneger",
			required: "true",
		},
		dashboard: {
			type: "Boolean",
			example: "yes",
		},
		masterManager: {
			type: "object",
			properties: {
				selfValue: {
					type: "Boolean",
					example: "yes",
				},
			},

			basicSettings: {
				type: "object",
				properties: {
					selfValue: {
						type: "Boolean",
						example: "yes",
					},

					designation: {
						type: "Boolean",
						example: "no",
					},
					bank: {
						type: "Boolean",
						example: "no",
					},
					currency: {
						type: "Boolean",
						example: "no",
					},
					assignMenu: {
						type: "Boolean",
						example: "no",
					},
					contactType: {
						type: "Boolean",
						example: "no",
					},
					markupType: {
						type: "Boolean",
						example: "no",
					},
				},
			},
			locationSettings: {
				type: "object",
				properties: {
					selfValue: {
						type: "Boolean",
						example: "yes",
					},

					marketType: {
						type: "Boolean",
						example: "no",
					},
					region: {
						type: "Boolean",
						example: "no",
					},
					country: {
						type: "Boolean",
						example: "no",
					},
					province: {
						type: "Boolean",
						example: "no",
					},
					destination: {
						type: "Boolean",
						example: "no",
					},
				},
			},
			hotelSettings: {
				type: "object",
				properties: {
					selfValue: {
						type: "Boolean",
						example: "yes",
					},

					hotelCategory: {
						type: "Boolean",
						example: "no",
					},
					hotelType: {
						type: "Boolean",
						example: "yes",
					},
					occupancyType: {
						type: "Boolean",
						example: "no",
					},
					seasonType: {
						type: "Boolean",
						example: "no",
					},
					roomCategory: {
						type: "Boolean",
						example: "yes",
					},
					roomType: {
						type: "Boolean",
						example: "no",
					},
					hotelAmenity: {
						type: "Boolean",
						example: "no",
					},
					roomAmenity: {
						type: "Boolean",
						example: "yes",
					},
					mealPlan: {
						type: "Boolean",
						example: "no",
					},
				},
			},
			agentSettings: {
				type: "object",
				properties: {
					selfValue: {
						type: "Boolean",
						example: "yes",
					},

					agentCategory: {
						type: "Boolean",
						example: "no",
					},
				},
			},
			packageSettings: {
				type: "object",
				properties: {
					selfValue: {
						type: "Boolean",
						example: "yes",
					},

					packageCategory: {
						type: "Boolean",
						example: "no",
					},
					packageType: {
						type: "Boolean",
						example: "no",
					},
					dayActivities: {
						type: "Boolean",
						example: "yes",
					},
					itineraryDetails: {
						type: "Boolean",
						example: "no",
					},
					visaInformation: {
						type: "Boolean",
						example: "no",
					},
					termsAndConditions: {
						type: "Boolean",
						example: "no",
					},
					paymentGateway: {
						type: "Boolean",
						example: "no",
					},
					communicationMail: {
						type: "Boolean",
						example: "no",
					},
				},
			},
			API: {
				type: "object",
				properties: {
					selfValue: {
						type: "Boolean",
						example: "yes",
					},
					smyRooms: {
						type: "Boolean",
						example: "yes",
					},
					whiteSands: {
						type: "Boolean",
						example: "no",
					},
				},
			},
			houseboatSettings: {
				type: "object",
				properties: {
					selfValue: {
						type: "Boolean",
						example: "yes",
					},

					houseBoatType: {
						type: "Boolean",
						example: "no",
					},
					houseBoatRoomCategory: {
						type: "Boolean",
						example: "no",
					},
					houseBoatRoomType: {
						type: "Boolean",
						example: "no",
					},
					coupon: {
						type: "Boolean",
						example: "yes",
					},
				},
			},
		},
		companyProfile: {
			type: "String",
			example: "IT",
		},
		registration: {
			type: "object",
			properties: {
				newBooking: {
					selfValue: {
						type: "Boolean",
						example: "yes",
					},
					hotelBooking: {
						type: "Boolean",
						example: "no",
					},
					packageBooking: {
						type: "Boolean",
						example: "no",
					},
				},
			},
		},
		myBooking: {
			type: "object",
			properties: {
				selfValue: {
					type: "Boolean",
					example: "yes",
				},
				hotelBookingList: {
					type: "Boolean",
					example: "no",
				},
				packageBookingList: {
					type: "Boolean",
					example: "no",
				},
				houseboatBookingList: {
					type: "Boolean",
					example: "no",
				},
				shikaraBookingList: {
					type: "Boolean",
					example: "no",
				},
			},
		},
		invoice: {
			type: "String",
			example: "bill",
		},
		inhouseAccounts: {
			type: "object",
			properties: {
				selfValue: {
					type: "Boolean",
					example: "yes",
				},
				agentAccounts: {
					type: "Boolean",
					example: "yes",
				},
				paymentGatewayTransactions: {
					type: "Boolean",
					example: "yes",
				},
			},
		},
		assignedAgents: {
			type: "String",
			example: "yes",
		},
		calendar: {
			type: "String",
			example: "yes",
		},
		extranetContractRate: {
			type: "String",
			example: "yes",
		},
		report: {
			type: "object",
			properties: {
				selfValue: {
					type: "Boolean",
					example: "yes",
				},

				bookingReport: {
					type: "Boolean",
					example: "yes",
				},
				cancellationReport: {
					type: "Boolean",
					example: "yes",
				},
				inventoryStatus: {
					type: "Boolean",
					example: "yes",
				},
				hotelWise: {
					type: "Boolean",
					example: "yes",
				},
				accounts: {
					type: "Boolean",
					example: "yes",
				},
				dayWise: {
					type: "Boolean",
					example: "yes",
				},
				monthlyWise: {
					type: "Boolean",
					example: "yes",
				},
				comparison: {
					type: "Boolean",
					example: "yes",
				},
				agentWise: {
					type: "Boolean",
					example: "yes",
				},
				contractExpiryReport: {
					type: "Boolean",
					example: "yes",
				},
				contractrate: {
					type: "Boolean",
					example: "yes",
				},
				userReport: {
					type: "Boolean",
					example: "yes",
				},
				stopSalereport: {
					type: "Boolean",
					example: "yes",
				},
				userLogins: {
					type: "Boolean",
					example: "yes",
				},
			},
		},
	},
};

const createNewAssignMenuSwagger = {
	tags: ["AssignMenu"],
	description: "Create AssignMenu",
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
		example: "",
	},
	responses: {
		200: {
			description: "Successfully triggered the CREATE AssignMenu API",
		},
	},
};

const updRequestBody = {
	type: "object",
	properties: {
		roleName: {
			type: "String",
			example: "DADMIN",
			required: "true",
		},
		dashboard: {
			type: "Boolean",
			example: "yes",
		},
		masterManager: {
			type: "object",
			properties: {
				selfValue: {
					type: "Boolean",
					example: "yes",
				},
			},

			basicSettings: {
				type: "object",
				properties: {
					selfValue: {
						type: "Boolean",
						example: "yes",
					},

					designation: {
						type: "Boolean",
						example: "no",
					},
					bank: {
						type: "Boolean",
						example: "no",
					},
					currency: {
						type: "Boolean",
						example: "no",
					},
					assignMenu: {
						type: "Boolean",
						example: "no",
					},
					contactType: {
						type: "Boolean",
						example: "no",
					},
					markupType: {
						type: "Boolean",
						example: "no",
					},
				},
			},
			locationSettings: {
				type: "object",
				properties: {
					selfValue: {
						type: "Boolean",
						example: "yes",
					},

					marketType: {
						type: "Boolean",
						example: "no",
					},
					region: {
						type: "Boolean",
						example: "no",
					},
					country: {
						type: "Boolean",
						example: "no",
					},
					province: {
						type: "Boolean",
						example: "no",
					},
					destination: {
						type: "Boolean",
						example: "no",
					},
				},
			},
			hotelSettings: {
				type: "object",
				properties: {
					selfValue: {
						type: "Boolean",
						example: "yes",
					},

					hotelCategory: {
						type: "Boolean",
						example: "no",
					},
					hotelType: {
						type: "Boolean",
						example: "yes",
					},
					occupancyType: {
						type: "Boolean",
						example: "no",
					},
					seasonType: {
						type: "Boolean",
						example: "no",
					},
					roomCategory: {
						type: "Boolean",
						example: "yes",
					},
					roomType: {
						type: "Boolean",
						example: "no",
					},
					hotelAmenity: {
						type: "Boolean",
						example: "no",
					},
					roomAmenity: {
						type: "Boolean",
						example: "yes",
					},
					mealPlan: {
						type: "Boolean",
						example: "no",
					},
				},
			},
			agentSettings: {
				type: "object",
				properties: {
					selfValue: {
						type: "Boolean",
						example: "yes",
					},

					agentCategory: {
						type: "Boolean",
						example: "no",
					},
				},
			},
			packageSettings: {
				type: "object",
				properties: {
					selfValue: {
						type: "Boolean",
						example: "yes",
					},

					packageCategory: {
						type: "Boolean",
						example: "no",
					},
					packageType: {
						type: "Boolean",
						example: "no",
					},
					dayActivities: {
						type: "Boolean",
						example: "yes",
					},
					itineraryDetails: {
						type: "Boolean",
						example: "no",
					},
					visaInformation: {
						type: "Boolean",
						example: "no",
					},
					termsAndConditions: {
						type: "Boolean",
						example: "no",
					},
					paymentGateway: {
						type: "Boolean",
						example: "no",
					},
					communicationMail: {
						type: "Boolean",
						example: "no",
					},
				},
			},
			API: {
				type: "object",
				properties: {
					selfValue: {
						type: "Boolean",
						example: "yes",
					},
					smyRooms: {
						type: "Boolean",
						example: "yes",
					},
					whiteSands: {
						type: "Boolean",
						example: "no",
					},
				},
			},
			houseboatSettings: {
				type: "object",
				properties: {
					selfValue: {
						type: "Boolean",
						example: "yes",
					},

					houseBoatType: {
						type: "Boolean",
						example: "no",
					},
					houseBoatRoomCategory: {
						type: "Boolean",
						example: "no",
					},
					houseBoatRoomType: {
						type: "Boolean",
						example: "no",
					},
					coupon: {
						type: "Boolean",
						example: "yes",
					},
				},
			},
		},
		companyProfile: {
			type: "String",
			example: "IT",
		},
		registration: {
			type: "object",
			properties: {
				newBooking: {
					selfValue: {
						type: "Boolean",
						example: "yes",
					},
					hotelBooking: {
						type: "Boolean",
						example: "no",
					},
					packageBooking: {
						type: "Boolean",
						example: "no",
					},
				},
			},
		},
		myBooking: {
			type: "object",
			properties: {
				selfValue: {
					type: "Boolean",
					example: "yes",
				},
				hotelBookingList: {
					type: "Boolean",
					example: "no",
				},
				packageBookingList: {
					type: "Boolean",
					example: "no",
				},
				houseboatBookingList: {
					type: "Boolean",
					example: "no",
				},
				shikaraBookingList: {
					type: "Boolean",
					example: "no",
				},
			},
		},
		invoice: {
			type: "String",
			example: "bill",
		},
		inhouseAccounts: {
			type: "object",
			properties: {
				selfValue: {
					type: "Boolean",
					example: "yes",
				},
				agentAccounts: {
					type: "Boolean",
					example: "yes",
				},
				paymentGatewayTransactions: {
					type: "Boolean",
					example: "yes",
				},
			},
		},
		assignedAgents: {
			type: "String",
			example: "yes",
		},
		calendar: {
			type: "String",
			example: "yes",
		},
		extranetContractRate: {
			type: "String",
			example: "yes",
		},
		report: {
			type: "object",
			properties: {
				selfValue: {
					type: "Boolean",
					example: "yes",
				},

				bookingReport: {
					type: "Boolean",
					example: "yes",
				},
				cancellationReport: {
					type: "Boolean",
					example: "yes",
				},
				inventoryStatus: {
					type: "Boolean",
					example: "yes",
				},
				hotelWise: {
					type: "Boolean",
					example: "yes",
				},
				accounts: {
					type: "Boolean",
					example: "yes",
				},
				dayWise: {
					type: "Boolean",
					example: "yes",
				},
				monthlyWise: {
					type: "Boolean",
					example: "yes",
				},
				comparison: {
					type: "Boolean",
					example: "yes",
				},
				agentWise: {
					type: "Boolean",
					example: "yes",
				},
				contractExpiryReport: {
					type: "Boolean",
					example: "yes",
				},
				contractrate: {
					type: "Boolean",
					example: "yes",
				},
				userReport: {
					type: "Boolean",
					example: "yes",
				},
				stopSalereport: {
					type: "Boolean",
					example: "yes",
				},
				userLogins: {
					type: "Boolean",
					example: "yes",
				},
			},
		},
	},
};

const updateAssignMenuSwagger = {
	tags: ["AssignMenu"],
	description: "Update Agent Detaisl",
	summary: "Use this API to update AssignMenu",
	operationId: "updateAgent",
	consumes: ["application/json"],
	produces: ["application/json"],
	parameters: [
		{
			name: "assignMenuId",
			in: "path",
			description: "Agent id that needs to be Updated",
			example: "",
			type: "string",
		},
	],
	requestBody: {
		content: {
			"application/json": {
				schema: updRequestBody,
			},
		},
		example: "",
	},
	responses: {
		200: {
			description: "Successfully triggered the Update User Proile API",
		},
	},
};

const deleteAssignMenuSwagger = {
	tags: ["AssignMenu"],
	description: "Delete AssignMenu Details",
	summary: "Use this API to delete existing AssignMenu Details",
	operationId: "deleteAssignMenu",
	consumes: ["application/json"],
	produces: ["application/json"],
	parameters: [
		{
			name: "assignMenuId",
			in: "path",
			description: "AssignMenu id that needs to be Delete",
			example: "",
			type: "string",
		},
	],
	responses: {
		200: {
			description: "Successfully triggered the delete AssignMenu API",
		},
	},
};

module.exports = {
	createNewAssignMenuSwagger,
	getAllAssignMenusSwagger,
	updateAssignMenuSwagger,
	deleteAssignMenuSwagger,
	getSingleAssignMenuSwagger,
};
