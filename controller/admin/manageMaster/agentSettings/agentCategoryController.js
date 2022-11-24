const AgentCategory = require("../../../../model/admin/manageMaster/agentSettings/agentCategoryModel");

//Create a new agent category
const createNewAgentCategory = async (req, res, next) => {
  try {
    const { agentCategory } = req.body;
    const agentCategoryData = await AgentCategory.create({
      agentCategory,
    });

    if (agentCategoryData) {
      res.status(201).json({
        error: false,
        message: "Agent Category Created!",
        response: agentCategoryData,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Agent Category Not Created!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

// Get all agent category
const getAllAgentCategory = async (req, res, next) => {
  try {
    const allAgentCategory = await AgentCategory.find();
    if (allAgentCategory) {
      res.status(201).json({
        error: false,
        message: "Agent Category Fetched!",
        response: allAgentCategory,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Agent Category Not Fetched!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get Single Agent Category
const getSingleAgentCategory = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const singleAgentCategory = await AgentCategory.findById(_id).exec();

    if (singleAgentCategory) {
      res.status(201).json({
        error: false,
        message: "Single Agent Category Fetched!",
        response: singleAgentCategory,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Single Agent Category Not Fetched!",
      });
    }
  } catch (error) {
    next(error);
  }
};

//Update Agent Category
const updateAgentCategory = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const { agentCategory } = req.body;
    const finalAgentCategory = await AgentCategory.findById(_id).exec();
    finalAgentCategory.agentCategory = agentCategory;
    const updatedAgentCategory = await finalAgentCategory.save();

    if (updatedAgentCategory) {
      res.status(201).json({
        error: false,
        message: "Agent Category updated!",
        response: updatedAgentCategory,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Agent Category not updated!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Delete Agent Category
const deleteAgentCategory = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const deleteCategory = await AgentCategory.findByIdAndDelete(_id);
    if (deleteCategory) {
      res.status(201).json({
        error: false,
        message: "Agent Category deleted!",
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Deletion not completed!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

module.exports = {
  getAllAgentCategory,
  getSingleAgentCategory,
  createNewAgentCategory,
  updateAgentCategory,
  deleteAgentCategory,
};
