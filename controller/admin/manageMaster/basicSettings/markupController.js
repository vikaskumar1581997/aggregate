const MarkUp = require("../../../../model/admin/manageMaster/basicSettings/markupModel");

//Create a new MarkUp
const createNewMarkup = async (req, res, next) => {
  try {
    const { markupType, markupName, markupValue } = req.body;
    const markupData = await MarkUp.create({
      markupType,
      markupName,
      markupValue,
    });
    if (markupData) {
      res.status(201).json({
        error: false,
        message: "markupData created successfully!",
        response: markupData,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Markup not created!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get all markups
const getAllMarkups = async (req, res, next) => {
  try {
    const allMarkup = await MarkUp.find().lean();
    if (allMarkup) {
      res.status(201).json({
        error: false,
        message: "All Markups fetched successfully!",
        response: allMarkup,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Markup not found!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get Single MarkUp
const getSingleMarkUp = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const singleMarkUp = await MarkUp.findById(_id).exec();

    if (singleMarkUp) {
      res.status(201).json({
        error: false,
        message: "Single MarkUp Fetched!",
        response: singleMarkUp,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Single MarkUp Not Fetched!",
      });
    }
  } catch (error) {
    next(error);
  }
};

//Update a Markup
const updateMarkup = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const { markupType, markupName, markupValue } = req.body;
    const finalMarkup = await MarkUp.findById(_id).exec();

    finalMarkup.markupType = markupType;
    finalMarkup.markupName = markupName;
    finalMarkup.markupValue = markupValue;

    const updatedMarkup = await finalMarkup.save();

    if (updatedMarkup) {
      res.status(201).json({
        error: false,
        message: "Markup updated!",
        response: updatedMarkup,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Markup not updated!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Delete a Markup
const deleteMarkup = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const deleteMarkup = await MarkUp.findByIdAndDelete(_id);
    if (deleteMarkup) {
      res.status(201).json({
        error: false,
        message: "Markup deleted!",
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
  createNewMarkup,
  getAllMarkups,
  updateMarkup,
  deleteMarkup,
  getSingleMarkUp,
};
