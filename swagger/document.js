const adminlogin = require("./admin/adminloginAndRegistration/adminregistrationSwagger");
const getGuestDetails = require("./admin/bookingMaster/guestDetailsSwagger");
const agent = require("./admin/registration/agent/agentSwagger");
const agentCredit = require("./admin/registration/agent/agentCreditSwagger");
const employee = require("./admin/registration/employee/employeeSwagger");
const hotel = require("./admin/registration/hotel/hotelSwagger");
const houseBoat = require("./admin/registration/houseboat/houseboatSwagger");
const houseBoatContract = require("./admin/registration/houseboat/houseboatContractSwagger");
const agentCategory = require("./admin/manageMaster/agentSettingsSwagger");
const bank = require("./admin/manageMaster/basicSettings/bankSwagger");
const contactType = require("./admin/manageMaster/basicSettings/contactTypeSwagger");
const assignMenu = require("./admin/manageMaster/basicSettings/assignMenuSwagger");
const currency = require("./admin/manageMaster/basicSettings/currencySwagger");
const designation = require("./admin/manageMaster/basicSettings/designationSwagger");

const swaggerDocumentation = {
	openapi: "3.0.0",
	info: {
		title: "Gods Own Country",
		version: "1.0.0",
		description: "API Documentations",
	},
	servers: [
		{
			url: "http://localhost:2800/",
			description: "Local dev",
		},
	],
	basePath: "/",
	tags: [
		{
			name: "Adminlogin",
		},
		{
			name: "Guest",
		},
		{
			name: "Agent",
		},
		{
			name: "AgentCredit",
		},
		{
			name: "Employee",
		},
		{
			name: "Hotel",
		},
		{
			name: "HouseBoat",
		},
		{
			name: "AgentCategory",
		},
		{
			name: "Bank",
		},
		{
			name: "ContactType",
		},
		{
			name: "AssignMenu",
		},
		{
			name: "Currency",
		},
		{
			name: "Designation",
		},
	],
	paths: {
		"/api/auth/adminlogin": {
			post: adminlogin.addAdminloginSwagger,
		},
		"/api/auth/adminregistration": {
			post: adminlogin.adminRegistrationSwagger,
		},
		"/api/auth/adminupdation/{id}": {
			put: adminlogin.updateAdminloginSwagger,
		},
		"/api/auth/admindeletion/{id}": {
			delete: adminlogin.deleteAdminloginSwagger,
		},
		"/guest/guest/{id}": {
			get: getGuestDetails.getGuestDetailsById,
		},
		"/guest/list": {
			get: getGuestDetails.getGuestDetailsSwagger,
		},
		"/guest/create": {
			post: getGuestDetails.addGuestDetailsSwagger,
		},
		"/guest/update/{id}": {
			put: getGuestDetails.updateGuestDetailsSwagger,
		},
		"/guest/delete/{id}": {
			delete: getGuestDetails.deleteGuestDetailsSwagger,
		},
		"/registration/agent/agentSettings": {
			get: agent.getAgentSwagger,
		},
		"/registration/agent/createAgentSettings": {
			post: agent.addAgentSwagger,
		},
		"/registration/agent/updateAgentSettings/{id}": {
			put: agent.updateAgentSwagger,
		},
		"/registration/agent/deleteAgentSettings/{id}": {
			delete: agent.deleteAgentSwagger,
		},
		"/registration/agent/getAgentCredit": {
			get: agentCredit.getAgentCreditSwagger,
		},
		"/registration/agent/createAgentCredit": {
			post: agentCredit.addAgentCreditSwagger,
		},
		"/registration/agent/updateAgentCredit/{id}": {
			put: agentCredit.updateAgentCreditSwagger,
		},
		"/registration/employeeSettings/getEmployee": {
			get: employee.getEmployeeSwagger,
		},
		"/registration/employeeSettings/createEmployee": {
			post: employee.addEmployeeSwagger,
		},
		"/registration/employeeSettings/updateEmployee/{id}": {
			put: employee.updateEmployeeSwagger,
		},
		"/registration/employeeSettings/deleteEmployee/{id}": {
			delete: employee.deleteEmployeeSwagger,
		},
		"/registration/hotel/getHotelList": {
			get: hotel.getHotelSwagger,
		},
		"/registration/hotel/createHotel": {
			post: hotel.addHotelSwagger,
		},
		"/registration/hotel/updateHotel/{id}": {
			put: hotel.updateHotelSwagger,
		},
		"/registration/hotel/deleteHotel/{id}": {
			delete: hotel.deleteHotelSwagger,
		},

		"/registration/houseboatSettings/getHouseboat": {
			get: houseBoat.getHouseboatSwagger,
		},
		"/registration/houseboatSettings/getOneHouseboat/{houseboatId}": {
			get: getGuestDetails.getGuestDetailsById,
		},
		"/registration/houseboatSettings/createHouseboat": {
			post: houseBoat.addHouseboatSwagger,
		},
		"/registration/houseboatSettings/updateHouseboat/{houseboatId}": {
			put: houseBoat.updateHouseboatSwagger,
		},
		"/registration/houseboatSettings/deleteHouseboat/{houseboatId}": {
			delete: houseBoat.deleteHouseboatSwagger,
		},

		// "/registration/houseboatSettings/createHouseboatContract": {
		// 	post: houseBoat.addHotelSwagger,
		// },
		// "/registration/houseboatSettings/getHouseboatContract/{id}": {
		// 	get: getGuestDetails.getGuestDetailsById,
		// },
		// "/registration/houseboatSettings/updateHouseboatContract/{id}": {
		// 	put: houseBoat.updateHotelSwagger,
		// },
		// "/registration/houseboatSettings/deleteHouseboatContract/{id}": {
		// 	delete: houseBoat.deleteHotelSwagger,
		// },

		"/master/agentSettings/getAgentCategory": {
			get: agentCategory.getAllAgentCategorySwagger,
		},
		"/master/agentSettings/getOneAgentCategory/{agentCategoryId}": {
			get: agentCategory.getSingleAgentCategorySwagger,
		},
		"/master/agentSettings/createAgentCategory": {
			post: agentCategory.createNewAgentCategorySwagger,
		},
		"/master/agentSettings/updateAgentCategory/{agentCategoryId}": {
			put: agentCategory.updateAgentCategorySwagger,
		},
		"/master/agentSettings/deleteAgentCategory/{agentCategoryId}": {
			delete: agentCategory.deleteAgentCategorySwagger,
		},

		"/master/basicSettings/getBank": {
			get: bank.getAllBanksSwagger,
		},
		"/master/basicSettings/getOneBank/{bankId}": {
			get: bank.getSingleBankSwagger,
		},
		"/master/basicSettings/createBank": {
			post: bank.createNewBankSwagger,
		},
		"/master/basicSettings/updateBank/{bankId}": {
			put: bank.updateBankSwagger,
		},
		"/master/basicSettings/deleteBank/{bankId}": {
			delete: bank.deleteBankSwagger,
		},

		"/master/basicSettings/getContactType": {
			get: contactType.getAllContactTypesSwagger,
		},
		"/master/basicSettings/getOneContactType/{contactTypeId}": {
			get: contactType.getSingleContactTypeSwagger,
		},
		"/master/basicSettings/createContactType": {
			post: contactType.createNewContactTypeSwagger,
		},
		"/master/basicSettings/updateContactType/{contactTypeId}": {
			put: contactType.updateContactTypeSwagger,
		},
		"/master/basicSettings/deleteContactType/{contactTypeId}": {
			delete: contactType.deleteContactTypeSwagger,
		},

		"/master/basicSettings/getAssignMenu": {
			get: assignMenu.getAllAssignMenusSwagger,
		},
		"/master/basicSettings/getOneAssignMenu/{assignMenuId}": {
			get: assignMenu.getSingleAssignMenuSwagger,
		},
		"/master/basicSettings/createAssignMenu": {
			post: assignMenu.createNewAssignMenuSwagger,
		},
		"/master/basicSettings/updateAssignMenu/{assignMenuId}": {
			put: assignMenu.updateAssignMenuSwagger,
		},
		"/master/basicSettings/deleteAssignMenu/{assignMenuId}": {
			delete: assignMenu.deleteAssignMenuSwagger,
		},

		"/master/basicSettings/getCurrency": {
			get: currency.getAllCurrencysSwagger,
		},
		"/master/basicSettings/getOneCurrency/{currencyId}": {
			get: currency.getSingleCurrencySwagger,
		},
		"/master/basicSettings/createCurrency": {
			post: currency.createNewCurrencySwagger,
		},
		"/master/basicSettings/updateCurrency/{currencyId}": {
			put: currency.updateCurrencySwagger,
		},
		"/master/basicSettings/deleteCurrency/{currencyId}": {
			delete: currency.deleteCurrencySwagger,
		},

		"/master/basicSettings/getDesignation": {
			get: designation.getAllDesignationsSwagger,
		},
		"/master/basicSettings/getOneDesignation/{designationId}": {
			get: designation.getSingleDesignationSwagger,
		},
		"/master/basicSettings/createDesignation": {
			post: designation.createNewDesignationSwagger,
		},
		"/master/basicSettings/updateDesignation/{designationId}": {
			put: designation.updateDesignationSwagger,
		},
		"/master/basicSettings/deleteDesignation/{designationId}": {
			delete: designation.deleteDesignationSwagger,
		},
	},
};

module.exports = swaggerDocumentation;
