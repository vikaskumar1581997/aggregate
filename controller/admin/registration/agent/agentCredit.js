const CreditLimit = require("../../../../model/admin/registration/agent/agentAction/creditLimitModel");

//Assign Credit Limit to agent
const creditLimitCreate = async (req, res, next) => {
  try {
    const agentData = req.body;

    const agentLimit = await CreditLimit.create(agentData);

    if (agentLimit) {
      res.status(201).json({
        error: false,
        message: " Agent credit created",
        response: agentLimit,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Agent credit not created",
      });
    }
  } catch (error) {
    next(error);
  }
};

//Get single agent credit limit
const singleAgentLimit = async (req, res, next) => {
  try {
    const { id: _id } = req.params;

    const getSingleAgentLimit = await CreditLimit.findById(_id).exec();

    if (getSingleAgentLimit) {
      res.status(201).json({
        error: false,
        message: "Agent credit Fetched!",
        response: getSingleAgentLimit,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Agent credit Not Fetched!",
      });
    }
  } catch (error) {
    next(error);
  }
};

//Update Credit Limit to agent
const updateCreditLimit = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const agentData = req.body;

    const updatedAgentCredit = await CreditLimit.findOneAndUpdate(
      _id,
      agentData,
      { new: true }
    );

    if (updatedAgentCredit) {
      res.status(201).json({
        error: false,
        message: "AgentCredit updated!",
        response: updatedAgentCredit,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "AgentCredit not updated!",
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { creditLimitCreate, singleAgentLimit, updateCreditLimit };
