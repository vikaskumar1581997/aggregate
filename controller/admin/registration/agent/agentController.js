const AgentModel = require("../../../../model/admin/registration/agent/agentModel");

//Create a new Agent
const createNewAgent = async (req, res, next) => {
  try {
    const {
      companyName,
      shortName,
      businessType,
      companyType,
      companyCode,
      agentUrl,
      authorizedPerson_firstName,
      authorizedPerson_lastName,
      agentEmail,
      zipCode,
      mobileNumber,
      contactPerson,
      faxNumber,
      telNumber,
      country,
      province,
      city,
      address,
      markupType,
      currency,
      status,
    } = req.body;

    const img = `${req.file.filename}`;
    const companyLogo = img.toString("base64");

    const newAgent = await AgentModel.create({
      companyName,
      shortName,
      businessType,
      companyType,
      companyCode,
      agentUrl,
      authorizedPerson_firstName,
      authorizedPerson_lastName,
      agentEmail,
      zipCode,
      mobileNumber,
      contactPerson,
      faxNumber,
      telNumber,
      country,
      province,
      city,
      address,
      markupType,
      currency,
      status,
      companyLogo: new Buffer.from(companyLogo, "base64"),
    });

    if (newAgent) {
      res.status(201).json({
        error: false,
        message: "New Agent created",
        response: newAgent,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "New Agent not created",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get all Agents
const getAllAgent = async (req, res, next) => {
  try {
    const allAgent = await AgentModel.find().exec();

    if (allAgent) {
      res.status(201).json({
        error: false,
        message: " Agent fetched",
        response: allAgent,
      });
    } else {
      res.status(400).json({
        error: true,
        message: " Agent not fetched",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get Single AgentModel
const getSingleAgentModel = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const singleAgentModel = await AgentModel.findById(_id).exec();

    if (singleAgentModel) {
      res.status(201).json({
        error: false,
        message: "Single AgentModel Fetched!",
        response: singleAgentModel,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Single AgentModel Not Fetched!",
      });
    }
  } catch (error) {
    next(error);
  }
};

//Update an Agent
const updateAgent = async (req, res, next) => {
  try {
    const { id: _id } = req.params;

    const {
      companyName,
      shortName,
      businessType,
      companyType,
      companyCode,
      agentUrl,
      authorizedPerson_firstName,
      authorizedPerson_lastName,
      agentEmail,
      zipCode,
      mobileNumber,
      contactPerson,
      faxNumber,
      telNumber,
      country,
      province,
      city,
      address,
      markupType,
      currency,
      status,
    } = req.body;

    const img = `${req.file.filename}`;
    const companyLogo = img.toString("base64");
    const newCompanyLogo = new Buffer.from(companyLogo, "base64");

    const finalAgent = await AgentModel.findById(_id);

    finalAgent.companyName = companyName;
    finalAgent.shortName = shortName;
    finalAgent.businessType = businessType;
    finalAgent.companyType = companyType;
    finalAgent.companyCode = companyCode;
    finalAgent.agentUrl = agentUrl;
    finalAgent.authorizedPerson_firstName = authorizedPerson_firstName;
    finalAgent.authorizedPerson_lastName = authorizedPerson_lastName;
    finalAgent.agentEmail = agentEmail;
    finalAgent.zipCode = zipCode;
    finalAgent.mobileNumber = mobileNumber;
    finalAgent.contactPerson = contactPerson;
    finalAgent.faxNumber = faxNumber;
    finalAgent.telNumber = telNumber;
    finalAgent.country = country;
    finalAgent.province == province;
    finalAgent.city = city;
    finalAgent.address = address;
    finalAgent.markupType = markupType;
    finalAgent.currency = currency;
    finalAgent.status = status;
    finalAgent.companyLogo = newCompanyLogo;

    const updatedAgent = await finalAgent.save();

    if (updatedAgent) {
      res.status(201).json({
        error: false,
        message: " Agent updated",
        response: updatedAgent,
      });
    } else {
      res.status(400).json({
        error: true,
        message: " Agent not updated",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Delete a  Agent
const deleteAgent = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const delAgent = await AgentModel.findByIdAndDelete(_id);

    if (delAgent) {
      res.status(201).json({
        error: false,
        message: " Agent deleted",
      });
    } else {
      res.status(400).json({
        error: true,
        message: " Agent not deleted",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

module.exports = {
  createNewAgent,
  getAllAgent,
  updateAgent,
  deleteAgent,
  getSingleAgentModel,
};
