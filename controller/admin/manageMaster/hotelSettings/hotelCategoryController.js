const HotelCategory = require("../../../../model/admin/manageMaster/hotelSettings/hotelCategoryModel");

//Create a new HotelCategory
const createNewHotelCategory = async (req, res, next) => {
  try {
    const { hotelCategory, tagLine } = req.body;
    const hotelCategoryData = await HotelCategory.create({
      hotelCategory,
      tagLine,
    });

    if (hotelCategory) {
      res.status(201).json({
        error: false,
        message: "Hotel Category created!",
        response: hotelCategoryData,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Hotel Category not created!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get all hotel category
const getAllHotelCategory = async (req, res, next) => {
  try {
    const allHotelCategory = await HotelCategory.find();
    if (allHotelCategory) {
      res.status(201).json({
        error: false,
        message: "All Hotel Category fetched successfully",
        response: allHotelCategory,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Hotel Category not found.",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Update a Hotel Category
const updateHotelCategory = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const { hotelCategory, tagLine } = req.body;

    const finalHotelCategory = await HotelCategory.findById(_id).exec();

    finalHotelCategory.hotelCategory = hotelCategory;
    finalHotelCategory.tagLine = tagLine;

    const updatedHotelCategory = await finalHotelCategory.save();

    if (updatedHotelCategory) {
      res.status(201).json({
        error: false,
        message: "Hotel Category updated!",
        response: updatedHotelCategory,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Hotel Category not updated!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Delete a Hotel Category
const deleteHotelCategory = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const deleteCategory = await HotelCategory.findByIdAndDelete(_id);
    if (deleteCategory) {
      res.status(201).json({
        error: false,
        message: "Hotel Category deleted!",
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
  createNewHotelCategory,
  getAllHotelCategory,
  updateHotelCategory,
  deleteHotelCategory,
};
