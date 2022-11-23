const TermsConditions = require("../../../../model/admin/manageMaster/packageSettings/termsAndConditionsModel");

//Create a new T&C
const createNewTAndC = async (req, res, next) => {
  try {
    const { descriptionType, tagLine, termsCode, description, country, state } =
      req.body;

    const newTAndC = await TermsConditions.create({
      descriptionType,
      tagLine,
      termsCode,
      description,
      country,
      state,
    });

    if (newTAndC) {
      res.status(201).json({
        error: false,
        message: "New T&C created",
        response: newTAndC,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "New T&C not created",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get all T&C
const getAllTAndC = async (req, res, next) => {
  try {
    const allTAndC = await TermsConditions.find().exec();

    if (allTAndC) {
      res.status(201).json({
        error: false,
        message: " T&C fetched",
        response: allTAndC,
      });
    } else {
      res.status(400).json({
        error: true,
        message: " T&C not fetched",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Update T&C
const updateTAndC = async (req, res, next) => {
  try {
    const { id: _id } = req.params;

    const { descriptionType, tagLine, termsCode, description, country, state } =
      req.body;

    const finalTAndC = await TermsConditions.findById(_id);

    finalTAndC.descriptionType = descriptionType;
    finalTAndC.tagLine = tagLine;
    finalTAndC.termsCode = termsCode;
    finalTAndC.description = description;
    finalTAndC.country = country;
    finalTAndC.state = state;

    const updatedTAndC = await finalTAndC.save();

    if (updatedTAndC) {
      res.status(201).json({
        error: false,
        message: " T&C updated",
        response: updatedTAndC,
      });
    } else {
      res.status(400).json({
        error: true,
        message: " T&C not updated",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Delete T&C
const deleteTAndC = async (req, res, next) => {
  try {
    const { id: _id } = req.params;

    const deleteTC = await TermsConditions.findByIdAndDelete({ _id });

    if (deleteTC) {
      res.status(201).json({
        error: false,
        message: " T&C deleted",
        response: deleteTC,
      });
    } else {
      res.status(400).json({
        error: true,
        message: " T&C not deleted",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

module.exports = { createNewTAndC, updateTAndC, getAllTAndC, deleteTAndC };
