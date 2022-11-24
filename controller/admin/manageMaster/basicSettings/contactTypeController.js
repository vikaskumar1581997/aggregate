const ContactType = require("../../../../model/admin/manageMaster/basicSettings/contactTypeModel");

//Create a new ContactType
const createNewContactType = async (req, res, next) => {
  try {
    const { contactType } = req.body;
    const contactTypeData = await ContactType.create({
      contactType: contactType,
    });
    if (contactTypeData) {
      res.status(201).json({
        error: false,
        message: "ContactType created successfully!",
        response: contactTypeData,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "ContactType not created!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get all ContactTypes
const getAllContactTypes = async (req, res, next) => {
  try {
    const allContactType = await ContactType.find().lean();
    // res.json(allContactType);
    if (allContactType) {
      res.status(201).json({
        error: false,
        message: "All contactTypes fetched successfully!",
        response: allContactType,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "ContactType not found!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get Single ContactType
const getSingleContactType = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const singleContactType = await ContactType.findById(_id).exec();

    if (singleContactType) {
      res.status(201).json({
        error: false,
        message: "Single ContactType Fetched!",
        response: singleContactType,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Single ContactType Not Fetched!",
      });
    }
  } catch (error) {
    next(error);
  }
};

//Update a ContactType
const updateContactType = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const { contactType } = req.body;

    const finalContactType = await ContactType.findById(_id).exec();
    finalContactType.contactType = contactType;

    const updatedContactType = await finalContactType.save();

    if (updatedContactType) {
      res.status(201).json({
        error: false,
        message: "ContactType updated!",
        response: updatedContactType,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "ContactType not updated!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Delete a ContactType
const deleteContactType = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const deleteContactType = await ContactType.findByIdAndDelete(_id);
    if (deleteContactType) {
      res.status(201).json({
        error: false,
        message: "ContactType deleted!",
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
  createNewContactType,
  getAllContactTypes,
  updateContactType,
  deleteContactType,
  getSingleContactType,
};
