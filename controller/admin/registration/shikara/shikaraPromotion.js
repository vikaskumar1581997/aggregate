const ShikaraPromotion = require("../../../../model/admin/registration/shikara/shikaraActions/shikaraPromotionModel");

//create
const createPromotion = async (req, res, next) => {
  try {
    const promotionData = req.body;
    const createPromotion = await ShikaraPromotion.create(promotionData);

    if (createPromotion) {
      res.status(201).json({
        error: false,
        message: "Shikara Promotion Created!",
        response: createPromotion,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Shikara Promotion Not Created!",
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
    const singlePromotion = await ShikaraPromotion.findById(_id).exec();

    if (singlePromotion) {
      res.status(201).json({
        error: false,
        message: " Shikara Promotion Fetched!",
        response: singlePromotion,
      });
    } else {
      res.status(400).json({
        error: true,
        message: " Shikara Promotion Not Fetched!",
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

    const updatedPromotion = await ShikaraPromotion.findOneAndUpdate(
      _id,
      promotionData,
      { new: true }
    );

    if (updatedPromotion) {
      res.status(201).json({
        error: false,
        message: "Shikara Promotion updated!",
        response: updatedPromotion,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Shikara Promotion not updated!",
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

    const delPromotion = await ShikaraPromotion.findByIdAndDelete(_id);

    if (delPromotion) {
      res.status(201).json({
        error: false,
        message: " Shikara Promotion deleted",
      });
    } else {
      res.status(400).json({
        error: true,
        message: " Shikara Promotion not deleted",
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
