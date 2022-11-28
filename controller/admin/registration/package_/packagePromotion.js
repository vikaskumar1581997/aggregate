const PackagePromotion = require("../../../../model/admin/registration/package_/packageAction/packagePromotionModel");

//create
const createPackagePromotion = async (req, res, next) => {
  try {
    const promotionData = req.send;

    const createData = await PackagePromotion.create(promotionData);

    if (createData) {
      res.status(201).json({
        error: false,
        message: " Package Promotion created",
        response: createData,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Package Promotion not created",
      });
    }
  } catch (error) {
    next(error);
    console.log(error);
  }
};

//get single
const getPackagePromotion = async (req, res, next) => {
  try {
    const { id: _id } = req.body;

    const getPromotion = await PackagePromotion.findById(_id);

    if (getPromotion) {
      res.status(201).json({
        error: false,
        message: "Package Promotion Fetched!",
        response: getPromotion,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Package Promotion Not Fetched!",
      });
    }
  } catch (error) {
    next(error);
    console.log(error);
  }
};

//update
const updatePackagePromotion = async (req, res, next) => {
  try {
    const { id: _id } = req.params;

    const promotionData = req.send;

    const updatedPackagePromotion = await PackagePromotion.findOneAndUpdate(
      _id,
      promotionData,
      { new: true }
    );

    if (updatedPackagePromotion) {
      res.status(201).json({
        error: false,
        message: "Package Promotion updated!",
        response: updatedPackagePromotion,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Package Promotion not updated!",
      });
    }
  } catch (error) {
    next(error);
    console.log(error);
  }
};

//delete
const deletePackagePromotion = async (req, res, next) => {
  try {
    const { id: _id } = req.params;

    const delPromotionomotion = await PackagePromotion.findByIdAndDelete(_id);

    if (delPromotion) {
      res.status(201).json({
        error: false,
        message: " Package Promotion deleted",
      });
    } else {
      res.status(400).json({
        error: true,
        message: " Package Promotion not deleted",
      });
    }
  } catch (error) {
    next(error);
    console.log(error);
  }
};

module.exports = {
  createPackagePromotion,
  getPackagePromotion,
  updatePackagePromotion,
  deletePackagePromotion,
};
