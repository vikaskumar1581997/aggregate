//const parameters = require("../../parameters");

const getHotelSwagger = {
	tags: ["Hotel"],
	description: "Get Available Hotel ",
	summary: "Use this API to Get Available Hotel ",
	operationId: "getHotelList",
	produces: ["application/json"],
	responses: {
		200: {
			description: "Successfully triggered the Get Hotel  API",
		},
	},
};

const requestBody1 = {
	type: "object",
	properties: {
		hotelName: {
			type: String,
			example: "Friends Vibes",
		},
		currency: {
			type: String,
			example: "INR",
		},
		hotelCategory: {
			type: String,
			example: "Clasic Clasic Bolcony",
		},
		hotelType: {
			type: String,
			example: "5 Star",
		},
		markupType: {
			type: String,
			example: "",
		},
		status: {
			type: String,
			example: "Active Inactive",
		},
		coupleFriendlyHotel: {
			type: Boolean,
			example: "True",
		},
		sanitizedStay: {
			type: Boolean,
			example: "Yes",
		},

		region: {
			type: String,
			example: "Jayanagar",
		},
		country: {
			type: String,
			example: "India",
		},
		state: {
			type: String,
			example: "Karnataka",
		},
		place: {
			type: String,
			example: "Bengalore",
		},
		location: {
			type: String,
			example: "J P Nagar",
		},
		zipCode: {
			type: String,
			example: "560089",
		},
		latitude: {
			type: String,
			example: "41564754",
		},
		longitude: {
			type: String,
			example: "4551954",
		},
		hotelAddress: {
			type: String,
			example: "address of hotel",
		},
		gsttax: {
			type: String,
			example: "GST4546",
		},
		contactType: {
			type: String,
			example: "",
		},
		contactPerson: {
			type: String,
			example: "Neelakanth",
		},
		mobile: {
			type: String,
			example: "784536945",
		},
		email: {
			type: String,
			example: "friendsvibes@gmail.com",
		},
		nearByAttraction: {
			place: {
				type: String,
				example: "Iskon Temple",
			},
			kilometers: {
				type: String,
				example: "3KM",
			},
		},
		hotelDescription: {
			type: String,
			example: "very good place to have food, highly rated",
		},
		childComplimentaryAge: {
			min: {
				type: Number,
				example: "1",
			},
			max: {
				type: Number,
				example: "5",
			},
		},
		childChargeableAge: {
			min: {
				type: Number,
				example: "1",
			},
			max: {
				type: Number,
				example: "3",
			},
		},
		hotelAmenities: {
			wifi: {
				type: Boolean,
				example: "yes",
			},
			restaurant: {
				type: Boolean,
				example: "yes",
			},
			power: {
				type: Boolean,
				example: "yes",
			},
			ac: {
				type: Boolean,
				example: "yes",
			},
			laundry: {
				type: Boolean,
				example: "yes",
			},
			swimmingPool: {
				type: Boolean,
				example: "yes",
			},
			housekeeping: {
				type: Boolean,
				example: "yes",
			},
			minibar: {
				type: Boolean,
				example: "yes",
			},
			petFriendly: {
				type: Boolean,
				example: "yes",
			},
			sauna: {
				type: Boolean,
				example: "yes",
			},
			Balcony: {
				type: Boolean,
				example: "yes",
			},
			steamRoom: {
				type: Boolean,
				example: "yes",
			},
			liftService: {
				type: Boolean,
				example: "yes",
			},
			fan: {
				type: Boolean,
				example: "yes",
			},
			bed: {
				type: Boolean,
				example: "yes",
			},
			roomBed: {
				type: Boolean,
				example: "yes",
			},
			bar: {
				type: Boolean,
				example: "yes",
			},
			escalator: {
				type: Boolean,
				example: "yes",
			},
			fullTimeRoomService: {
				type: Boolean,
				example: "yes",
			},
			hairDryer: {
				type: Boolean,
				example: "yes",
			},
			towel: {
				type: Boolean,
				example: "yes",
			},
		},
		weekDays: {
			sunday: {
				type: Boolean,
				example: "yes",
			},
			monday: {
				type: Boolean,
				example: "yes",
			},
			tuesday: {
				type: Boolean,
				example: "yes",
			},
			wednesday: {
				type: Boolean,
				example: "yes",
			},
			thursday: {
				type: Boolean,
				example: "yes",
			},
			friday: {
				type: Boolean,
				example: "yes",
			},
			saturday: {
				type: Boolean,
				example: "yes",
			},
		},
		weekEndDays: {
			sunday: {
				type: Boolean,
				example: "yes",
			},
			monday: {
				type: Boolean,
				example: "yes",
			},
			tuesday: {
				type: Boolean,
				example: "no",
			},
			wednesday: {
				type: Boolean,
				example: "yes",
			},
			thursday: {
				type: Boolean,
				example: "yes",
			},
			friday: {
				type: Boolean,
				example: "yes",
			},
			saturday: {
				type: Boolean,
				example: "yes",
			},
		},
		bank: {
			bankName: {
				type: String,
				example: "SBI",
			},
			accountNumber: {
				type: String,
				example: "41546765666656",
			},
			bankAddress: {
				type: String,
				example: "JP Nagar Bengalore",
			},
			iban: {
				type: String,
				example: "565jhj",
			},
			faxNumber: {
				type: String,
				example: "145413",
			},
			swiftCode: {
				type: String,
				example: "656641645",
			},
			telephone: {
				type: String,
				example: "08524369555",
			},
			contactPerson: {
				type: String,
				example: "Sharan",
			},
		},

		room: [
			{
				roomCategory: {
					type: String,
					example: "Single Double",
				},
				roomType: {
					type: [String],
					example: "AC NonAC",
				},
			},
		],

		termsAndConditions: {
			type: String,
			example: "need to provide a valid Id card",
		},

		isDeleted: {
			type: Boolean,
			example: "0",
		},
	},
};

const addHotelSwagger = {
	tags: ["Hotel"],
	description: "Create Hotel ",
	summary: "Use this API to create a new Hotel",
	operationId: "hotelRegistration",
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
			description: "Successfully triggered the CREATE Hotel  API",
		},
	},
};

const updRequestBody = {
	type: "object",
	properties: {
		hotelName: {
			type: String,
			example: "Friends Vibes",
		},
		currency: {
			type: String,
			example: "INR",
		},
		hotelCategory: {
			type: String,
			example: "Clasic Clasic Bolcony",
		},
		hotelType: {
			type: String,
			example: "5 Star",
		},
		markupType: {
			type: String,
			example: "",
		},
		status: {
			type: String,
			example: "Active Inactive",
		},
		coupleFriendlyHotel: {
			type: Boolean,
			example: "True",
		},
		sanitizedStay: {
			type: Boolean,
			example: "Yes",
		},

		region: {
			type: String,
			example: "Jayanagar",
		},
		country: {
			type: String,
			example: "India",
		},
		state: {
			type: String,
			example: "Karnataka",
		},
		place: {
			type: String,
			example: "Bengalore",
		},
		location: {
			type: String,
			example: "J P Nagar",
		},
		zipCode: {
			type: String,
			example: "560089",
		},
		latitude: {
			type: String,
			example: "41564754",
		},
		longitude: {
			type: String,
			example: "4551954",
		},
		hotelAddress: {
			type: String,
			example: "address of hotel",
		},
		gsttax: {
			type: String,
			example: "GST4546",
		},
		contactType: {
			type: String,
			example: "",
		},
		contactPerson: {
			type: String,
			example: "Neelakanth",
		},
		mobile: {
			type: String,
			example: "784536945",
		},
		email: {
			type: String,
			example: "friendsvibes@gmail.com",
		},
		nearByAttraction: {
			place: {
				type: String,
				example: "Iskon Temple",
			},
			kilometers: {
				type: String,
				example: "3KM",
			},
		},
		hotelDescription: {
			type: String,
			example: "very good place to have food, highly rated",
		},
		childComplimentaryAge: {
			min: {
				type: Number,
				example: "1",
			},
			max: {
				type: Number,
				example: "5",
			},
		},
		childChargeableAge: {
			min: {
				type: Number,
				example: "1",
			},
			max: {
				type: Number,
				example: "3",
			},
		},
		hotelAmenities: {
			wifi: {
				type: Boolean,
				example: "yes",
			},
			restaurant: {
				type: Boolean,
				example: "yes",
			},
			power: {
				type: Boolean,
				example: "yes",
			},
			ac: {
				type: Boolean,
				example: "yes",
			},
			laundry: {
				type: Boolean,
				example: "yes",
			},
			swimmingPool: {
				type: Boolean,
				example: "yes",
			},
			housekeeping: {
				type: Boolean,
				example: "yes",
			},
			minibar: {
				type: Boolean,
				example: "yes",
			},
			petFriendly: {
				type: Boolean,
				example: "yes",
			},
			sauna: {
				type: Boolean,
				example: "yes",
			},
			Balcony: {
				type: Boolean,
				example: "yes",
			},
			steamRoom: {
				type: Boolean,
				example: "yes",
			},
			liftService: {
				type: Boolean,
				example: "yes",
			},
			fan: {
				type: Boolean,
				example: "yes",
			},
			bed: {
				type: Boolean,
				example: "yes",
			},
			roomBed: {
				type: Boolean,
				example: "yes",
			},
			bar: {
				type: Boolean,
				example: "yes",
			},
			escalator: {
				type: Boolean,
				example: "yes",
			},
			fullTimeRoomService: {
				type: Boolean,
				example: "yes",
			},
			hairDryer: {
				type: Boolean,
				example: "yes",
			},
			towel: {
				type: Boolean,
				example: "yes",
			},
		},
		weekDays: {
			sunday: {
				type: Boolean,
				example: "yes",
			},
			monday: {
				type: Boolean,
				example: "yes",
			},
			tuesday: {
				type: Boolean,
				example: "yes",
			},
			wednesday: {
				type: Boolean,
				example: "yes",
			},
			thursday: {
				type: Boolean,
				example: "yes",
			},
			friday: {
				type: Boolean,
				example: "yes",
			},
			saturday: {
				type: Boolean,
				example: "yes",
			},
		},
		weekEndDays: {
			sunday: {
				type: Boolean,
				example: "yes",
			},
			monday: {
				type: Boolean,
				example: "yes",
			},
			tuesday: {
				type: Boolean,
				example: "no",
			},
			wednesday: {
				type: Boolean,
				example: "yes",
			},
			thursday: {
				type: Boolean,
				example: "yes",
			},
			friday: {
				type: Boolean,
				example: "yes",
			},
			saturday: {
				type: Boolean,
				example: "yes",
			},
		},
		bank: {
			bankName: {
				type: String,
				example: "SBI",
			},
			accountNumber: {
				type: String,
				example: "41546765666656",
			},
			bankAddress: {
				type: String,
				example: "JP Nagar Bengalore",
			},
			iban: {
				type: String,
				example: "565jhj",
			},
			faxNumber: {
				type: String,
				example: "145413",
			},
			swiftCode: {
				type: String,
				example: "656641645",
			},
			telephone: {
				type: String,
				example: "08524369555",
			},
			contactPerson: {
				type: String,
				example: "Sharan",
			},
		},

		room: [
			{
				roomCategory: {
					type: String,
					example: "Single Double",
				},
				roomType: {
					type: [String],
					example: "AC NonAC",
				},
			},
		],

		termsAndConditions: {
			type: String,
			example: "need to provide a valid Id card",
		},

		isDeleted: {
			type: Boolean,
			example: "0",
		},
	},
};

const updateHotelSwagger = {
	tags: ["Hotel"],
	description: "Update Hotel Detaisl",
	summary: "Use this API to update Hotel ",
	operationId: "updateHotel",
	consumes: ["application/json"],
	produces: ["application/json"],
	parameters: [
		{
			name: "id",
			in: "path",
			description: "Hotel id that needs to be Updated",
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

const deleteHotelSwagger = {
	tags: ["Hotel"],
	description: "Delete Hotel ",
	summary: "Use this API to delete existing Hotel ",
	operationId: "deleteHotel",
	consumes: ["application/json"],
	produces: ["application/json"],
	parameters: [
		{
			name: "id",
			in: "path",
			description: "Hotel id that needs to be Delete",
			required: true,
			type: "string",
		},
	],
	responses: {
		200: {
			description: "Successfully triggered the delete Hotel API",
		},
	},
};

module.exports = {
	addHotelSwagger,
	getHotelSwagger,
	updateHotelSwagger,
	deleteHotelSwagger,
};
