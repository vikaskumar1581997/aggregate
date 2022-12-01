const HouseboatContract = require("../../../../model/admin/registration/houseBoat/houseboatActions/houseboatContractModel");

//create
const createNewContract = async (req, res, next) => {
  try {
    const contractData = req.body;
    const createContract = await HouseboatContract.create(contractData);

    if (createContract) {
      res.status(201).json({
        error: false,
        message: "Houseboat Contract Created!",
        response: createContract,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Houseboat Contract Not Created!",
      });
    }
  } catch (error) {
    next(error);
    console.log(error);
  }
};

//get single
const getSingleContract = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const singleContract = await HouseboatContract.findById(_id).exec();

    if (singleContract) {
      res.status(201).json({
        error: false,
        message: "Single Houseboat Contract Fetched!",
        response: singleContract,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Single Houseboat Contract Not Fetched!",
      });
    }
  } catch (error) {
    next(error);
    console.log(error);
  }
};

//update
const updateContract = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const contractData = req.body;

    const updatedContract = await HouseboatContract.findOneAndUpdate(
      _id,
      contractData,
      { new: true }
    );

    if (updatedContract) {
      res.status(201).json({
        error: false,
        message: "Houseboat Contract updated!",
        response: updatedContract,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Houseboat Contract not updated!",
      });
    }
  } catch (error) {
    next(error);
    console.log(error);
  }
};

//delete
const deleteContract = async (req, res, next) => {
  try {
    const { id: _id } = req.params;

    const delContract = await HouseboatContract.findByIdAndDelete(_id);

    if (delContract) {
      res.status(201).json({
        error: false,
        message: " Houseboat Contract deleted",
      });
    } else {
      res.status(400).json({
        error: true,
        message: " Houseboat Contract not deleted",
      });
    }
  } catch (error) {
    next(error);
    console.log(error);
  }
};

module.exports = {
  createNewContract,
  getSingleContract,
  updateContract,
  deleteContract,
};
