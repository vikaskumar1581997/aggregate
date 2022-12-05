const getGuestDetails = require("./admin/bookingMaster/guestDetailsSwagger");
const agent = require("./admin/registration/agent/agentSwagger");
const agentCredit = require("./admin/registration/agent/agentCreditSwagger");
const employee = require("./admin/registration/employee/employeeSwagger");
const hotel = require("./admin/registration/hotel/hotelSwagger");

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
	],
	paths: {
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
	},
};

module.exports = swaggerDocumentation;
