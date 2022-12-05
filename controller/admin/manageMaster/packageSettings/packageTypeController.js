const PackageType = require("../../../../model/admin/manageMaster/packageSettings/packageTypeModel");

//Create new Package Type
const createNewPackageType = async (req, res, next) => {
  try {
    const { packageType, typeCode } = req.body;

    const newPackageType = await PackageType.create({
      packageType,
      typeCode,
    });

    if (newPackageType) {
      res.status(201).json({
        error: false,
        message: "Package Type created!",
        response: newPackageType,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Package Type not created!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get all package type
const getAllPackageType = async (req, res, next) => {
  try {
    const allPackageType = await PackageType.find();
    if (allPackageType) {
      res.status(201).json({
        error: false,
        message: "Package Type fetched!",
        response: allPackageType,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Package Type not fetched!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get Single PackageType
const getSinglePackageType = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const singlePackageType = await PackageType.findById(_id).exec();

    if (singlePackageType) {
      res.status(201).json({
        error: false,
        message: "Single PackageType Fetched!",
        response: singlePackageType,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Single PackageType Not Fetched!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Update a Package Type
const updatePackageType = async (req, res, next) => {
  try {
    const { id: _id } = req.params;

    const { packageType, typeCode } = req.body;

    const finalPackageType = await PackageType.findById(_id);
    finalPackageType.packageType = packageType;
    finalPackageType.typeCode = typeCode;

    const updatedPackageType = await finalPackageType.save();

    if (updatedPackageType) {
      res.status(201).json({
        error: false,
        message: "Package Type updated!",
        response: updatedPackageType,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Package Type not updated!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Delete a package Type
const deletePackageType = async (req, res, next) => {
  try {
    const { id: _id } = req.params;

    const deleteType = await PackageType.findByIdAndDelete(_id);

    if (deleteType) {
      res.status(201).json({
        error: false,
        message: "Package Type deleted!",
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Package Type not deleted!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

module.exports = {
  getAllPackageType,
  getSinglePackageType,
  createNewPackageType,
  updatePackageType,
  deletePackageType,
};
