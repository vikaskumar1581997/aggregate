const HouseboatPolicy = require("../../../../model/admin/registration/houseBoat/houseboatActions/houseboatPolicyModel");

//Create
const createPolicy = async (req, res, next) => {
  try {
    const policyData = req.body;
    const createPolicy = await HouseboatPolicy.create(policyData);

    if (createPolicy) {
      res.status(201).json({
        error: false,
        message: "Houseboat Policy Created!",
        response: createPolicy,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Houseboat Policy Not Created!",
      });
    }
  } catch (error) {
    next(error);
    console.log(error);
  }
};

//Get Single
const getSinglePolicy = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const singlePolicy = await HouseboatPolicy.findById(_id).exec();

    if (singlePolicy) {
      res.status(201).json({
        error: false,
        message: "Single Houseboat Policy Fetched!",
        response: singlePolicy,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Single Houseboat Policy Not Fetched!",
      });
    }
  } catch (error) {
    next(error);
    console.log(error);
  }
};

//Update
const updatePolicy = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const policyData = req.body;

    const updatedPolicy = await HouseboatPolicy.findOneAndUpdate(
      _id,
      policyData,
      { new: true }
    );

    if (updatedPolicy) {
      res.status(201).json({
        error: false,
        message: "Houseboat Policy updated!",
        response: updatedPolicy,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Houseboat Policy not updated!",
      });
    }
  } catch (error) {
    next(error);
    console.log(error);
  }
};

//Delete
const deletePolicy = async (req, res, next) => {
  try {
    const { id: _id } = req.params;

    const delPolicy = await HouseboatPolicy.findByIdAndDelete(_id);

    if (delPolicy) {
      res.status(201).json({
        error: false,
        message: " Houseboat Policy deleted",
      });
    } else {
      res.status(400).json({
        error: true,
        message: " Houseboat Policy not deleted",
      });
    }
  } catch (error) {
    next(error);
    console.log(error);
  }
};

module.exports = { createPolicy, getSinglePolicy, updatePolicy, deletePolicy };
