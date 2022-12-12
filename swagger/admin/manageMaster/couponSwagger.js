//const parameters = require("../../parameters");
const parameters = require("../../parameters");

const getAllCouponSwagger = {
	tags: ["Coupon"],
	description: "Get Available Coupon",
	summary: "Use this API to Get Available Coupon",
	operationId: "getAllCoupon",
	produces: ["application/json"],
	responses: {
		200: {
			description: "Successfully triggered the Get Coupon API",
		},
	},
};

const getSingleCouponSwagger = {
	tags: ["Coupon"],
	description: "Get Particular Coupon Details",
	summary: "Use this API to Get Particular Coupon Details",
	operationId: "getCouponDetailsById",
	parameters: [parameters.couponId],
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
		couponCode: {
			type: "String",
			example: "ABC1234",
		},
		couponType: {
			type: "String",
			example: "Discount",
		},
		allHotels: {
			type: "Boolean",
			example: "yes",
		},
		particularHotel: {
			type: "Boolean",
			example: "yes",
		},
		noOfUsers: {
			type: "Number",
			example: "yes",
		},
		discountValue: {
			type: "String",
			example: "yes",
		},
		discountType: {
			type: "String",
			example: "yes",
		},
		validityFrom: {
			type: "Date",
			example: "yes",
		},
		validityTo: {
			type: "Date",
			example: "yes",
		},
		couponImage: {
			data: Buffer,
			contentType: "String",
			example: "",
		},
		couponDescription: {
			type: "String",
			example: "",
		},
		isActive: {
			type: "Boolean",
			example: "",
		},
	},
};

const createNewCouponSwagger = {
	tags: ["Coupon"],
	description: "Create Coupon",
	summary: "Use this API to create a new Coupon",
	operationId: "createNewCoupon",
    consumes: ["multipart/form-data"],
	produces: ["application/json"],
	requestBody: {
		content: {
			"multipart/form-data": {
				schema: requestBody1,
			},
		},
		required: true,
	},
	responses: {
		200: {
			description: "Successfully triggered the CREATE Coupon API",
		},
	},
};

const updRequestBody = {
	type: "object",
	properties: {
		couponCode: {
			type: "String",
			example: "ABC1234",
		},
		couponType: {
			type: "String",
			example: "Discount",
		},
		allHotels: {
			type: "Boolean",
			example: "yes",
		},
		particularHotel: {
			type: "Boolean",
			example: "yes",
		},
		noOfUsers: {
			type: "Number",
			example: "yes",
		},
		discountValue: {
			type: "String",
			example: "yes",
		},
		discountType: {
			type: "String",
			example: "yes",
		},
		validityFrom: {
			type: "Date",
			example: "yes",
		},
		validityTo: {
			type: "Date",
			example: "yes",
		},
		couponImage: {
			contentType: "String",
			example: "",
		},
		couponDescription: {
			type: "String",
			example: "",
		},
		isActive: {
			type: "Boolean",
			example: "",
		},
	},
};

const updateCouponSwagger = {
	tags: ["Coupon"],
	description: "Update Coupon Detaisl",
	summary: "Use this API to update Coupon",
	operationId: "updateCoupon",
	consumes: ["application/json"],
	produces: ["application/json"],
	parameters: [
		{
			name: "couponId",
			in: "path",
			description: "Coupon id that needs to be Updated",
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

const deleteCouponSwagger = {
	tags: ["Coupon"],
	description: "Delete Coupon Details",
	summary: "Use this API to delete existing Coupon Details",
	operationId: "deleteCoupon",
	consumes: ["application/json"],
	produces: ["application/json"],
	parameters: [
		{
			name: "couponId",
			in: "path",
			description: "Coupon id that needs to be Delete",
			required: true,
			type: "string",
		},
	],
	responses: {
		200: {
			description: "Successfully triggered the delete Coupon API",
		},
	},
};

module.exports = {
	createNewCouponSwagger,
	getAllCouponSwagger,
	updateCouponSwagger,
	deleteCouponSwagger,
	getSingleCouponSwagger,
};

// couponCode: {
//     type: "String",
//     example: "ABC1234",
//   },
//   couponType: {
//     type: "String",
//     example: "Discount",
//   },
//   allHotels: {
//     type: "Boolean",
//     example: "yes,
//   },
//   particularHotel: {
//     type: "Boolean",
//     example: "yes",
//   },
//   noOfUsers: {
//     type: "Number",
//     example: "yes",
//   },
//   discountValue: {
//     type: "String",
//     example: "yes",
//   },
//   discountType: {
//     type: "String",
//     example: "yes",
//   },
//   validityFrom: {
//     type: "Date",
//     example: "yes",
//   },
//   validityTo: {
//     type: "Date",
//     example: "yes",
//   },
//   couponImage: {
//     data: Buffer,
//     contentType: "String",
//     example: "",
//   },
//   couponDescription: {
//     type: "String",
//     example: "",
//   },
//   isActive: {
//     type: "Boolean",
//     example: "",
//   },
