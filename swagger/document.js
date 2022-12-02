const getGuestDetails = require("./admin/bookingMaster/guestDetailsSwagger");

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
  },
};

module.exports = swaggerDocumentation;
