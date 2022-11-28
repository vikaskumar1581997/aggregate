const PackageRate = require("../../../../model/admin/registration/package_/packageAction/packageRateModel");

//Create PackageRate
const packageRateCreate = async (req, res, next) => {
  try {
    const packageRateData = req.body;
    const createRate = await PackageRate.create(packageRateData);

    if (createRate) {
      res.status(201).json({
        error: false,
        message: " Package Rate created",
        response: createRate,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Package Rate not created",
      });
    }
  } catch (error) {
    next(error);
    console.log(error);
  }
};

//Get Single PackageRate
const getPackageRate = async (req, res, next) => {
  try {
    const { id: _id } = req.params;

    const singleRate = await PackageRate.findById(_id);

    if (singleRate) {
      res.status(201).json({
        error: false,
        message: "Package Rate Fetched!",
        response: singleRate,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Package Rate Not Fetched!",
      });
    }
  } catch (error) {
    next(error);
    console.log(error);
  }
};

//Update PackageRate
const updatePackageRate = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const packageRateData = req.body;

    const updatedPackageRate = await PackageRate.findOneAndUpdate(
      _id,
      packageRateData,
      { new: true }
    );

    if (updatedPackageRate) {
      res.status(201).json({
        error: false,
        message: "Package Rate updated!",
        response: updatedPackageRate,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Package Rate not updated!",
      });
    }
  } catch (error) {
    next(error);
    console.log(error);
  }
};

//Delete  PackageRate
const deletePackageRate = async (req, res, next) => {
  try {
    const { id: _id } = req.params;

    const delPR = await PackageRate.findByIdAndDelete(_id);

    if (delPR) {
      res.status(201).json({
        error: false,
        message: " Package Rate deleted",
      });
    } else {
      res.status(400).json({
        error: true,
        message: " Package Rate not deleted",
      });
    }
  } catch (error) {
    next(error);
    console.log(error);
  }
};

module.exports = {
  packageRateCreate,
  getPackageRate,
  updatePackageRate,
  deletePackageRate,
};
