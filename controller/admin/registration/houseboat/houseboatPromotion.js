const HouseboatPromotion = require("../../../../model/admin/registration/houseBoat/houseboatActions/houseboatPromotionModel");

//create
const createPromotion = async (req, res, next) => {
  try {
    const promotionData = req.body;
    const createPromotion = await HouseboatPromotion.create(promotionData);

    if (createPromotion) {
      res.status(201).json({
        error: false,
        message: "Houseboat Promotion Created!",
        response: createPromotion,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Houseboat Promotion Not Created!",
      });
    }
  } catch (error) {
    next(error);
    console.log(error);
  }
};

//get single
const getSinglePromotion = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const singlePromotion = await HouseboatPromotion.findById(_id).exec();

    if (singlePromotion) {
      res.status(201).json({
        error: false,
        message: "Single Houseboat Promotion Fetched!",
        response: singlePromotion,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Single Houseboat Promotion Not Fetched!",
      });
    }
  } catch (error) {
    next(error);
    console.log(error);
  }
};

//update
const updatePromotion = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const promotionData = req.body;

    const updatedPromotion = await HouseboatPromotion.findOneAndUpdate(
      _id,
      promotionData,
      { new: true }
    );

    if (updatedPromotion) {
      res.status(201).json({
        error: false,
        message: "Houseboat Promotion updated!",
        response: updatedPromotion,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Houseboat Promotion not updated!",
      });
    }
  } catch (error) {
    next(error);
    console.log(error);
  }
};

//delete
const deletePromotion = async (req, res, next) => {
  try {
    const { id: _id } = req.params;

    const delPromotion = await HouseboatPromotion.findByIdAndDelete(_id);

    if (delPromotion) {
      res.status(201).json({
        error: false,
        message: " Houseboat Promotion deleted",
      });
    } else {
      res.status(400).json({
        error: true,
        message: " Houseboat Promotion not deleted",
      });
    }
  } catch (error) {
    next(error);
    console.log(error);
  }
};

module.exports = {
  createPromotion,
  getSinglePromotion,
  updatePromotion,
  deletePromotion,
};
