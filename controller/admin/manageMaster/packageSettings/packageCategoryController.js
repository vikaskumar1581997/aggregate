const PackageCategory = require("../../../../model/admin/manageMaster/packageSettings/packageCategoryModel");

//Create new Package Category
const createNewPackageCategory = async (req, res, next) => {
  try {
    const { packageCategory, categoryCode } = req.body;

    const newPackageCategory = await PackageCategory.create({
      packageCategory,
      categoryCode,
    });

    if (newPackageCategory) {
      res.status(201).json({
        error: false,
        message: "Package Category created!",
        response: newPackageCategory,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Package Category not created!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get all package category
const getAllPackageCategory = async (req, res, next) => {
  try {
    const allPackageCategory = await PackageCategory.find();
    if (allPackageCategory) {
      res.status(201).json({
        error: false,
        message: "Package Category fetched!",
        response: allPackageCategory,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Package Category not fetched!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get Single PackageCategory
const getSinglePackageCategory = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const singlePackageCategory = await PackageCategory.findById(_id).exec();

    if (singlePackageCategory) {
      res.status(201).json({
        error: false,
        message: "Single PackageCategory Fetched!",
        response: singlePackageCategory,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Single PackageCategory Not Fetched!",
      });
    }
  } catch (error) {
    next(error);
  }
};

//Update a Package Category
const updatePackageCategory = async (req, res, next) => {
  try {
    const { id: _id } = req.params;

    const { packageCategory, categoryCode } = req.body;

    const finalPackageCategory = await PackageCategory.findById(_id);
    finalPackageCategory.packageCategory = packageCategory;
    finalPackageCategory.categoryCode = categoryCode;

    const updatedPackageCategory = await finalPackageCategory.save();

    if (updatedPackageCategory) {
      res.status(201).json({
        error: false,
        message: "Package Category updated!",
        response: updatedPackageCategory,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Package Category not updated!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Delete a package Category
const deletePackageCategory = async (req, res, next) => {
  try {
    const { id: _id } = req.params;

    const deleteCategory = await PackageCategory.findByIdAndDelete(_id);

    if (deleteCategory) {
      res.status(201).json({
        error: false,
        message: "Package Category deleted!",
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Package Category not deleted!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

module.exports = {
  getAllPackageCategory,
  getSinglePackageCategory,
  createNewPackageCategory,
  updatePackageCategory,
  deletePackageCategory,
};
