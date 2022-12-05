const GuestDetails = require("../../../model/admin/bookingMaster/guestDetailsModel");

//Create a new Guest
const createNewGuest = async (req, res, next) => {
  try {
    const {
      title,
      firstName,
      middleName,
      lastName,
      nativeCountry,
      contactNumber,
      emailId,
      dob,
      passportNumber,
    } = req.body;

    let guest = await GuestDetails.find({
      contactNumber,
    });
    if (guest.length > 0) {
      res.status(200).json({
        error: false,
        message: "Guest with this contactNumber already exist",
        response: shop,
      });
    } else {
      const guestData = await GuestDetails.create({
        title,
        firstName,
        middleName,
        lastName,
        nativeCountry,
        contactNumber,
        emailId,
        dob,
        passportNumber,
      });
      res.status(200).json({
        error: false,
        message: "Guest Details Saved Successfully",
        Response: guestData,
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get all Amenities
const getGuestDetailsList = async (req, res, next) => {
  try {
    const guestData = await GuestDetails.find();

    if (guestData) {
      res.status(201).json({
        error: false,
        message: "All Guest Details List fetched successfully",
        response: guestData,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "No data Present.",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get Single HotelAmenity
const getGuestDetailsById = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const guestData = await GuestDetails.findById(_id).exec();

    if (guestData) {
      res.status(201).json({
        error: false,
        message: "Guest Details Fetched Successfully!",
        response: singleHotelAmenity,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Guest Details Does Not Exist!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Update an Amenity
const updateGuestDetails = async (req, res, next) => {
  try {
    const guestId = req.params.id;
    const {
      title,
      firstName,
      middleName,
      lastName,
      nativeCountry,
      contactNumber,
      emailId,
      dob,
      passportNumber,
    } = req.body;

    const guestData = await GuestDetails.findById(guestId).exec();

    guestData.title = title;
    guestData.firstName = firstName;
    guestData.middleName = middleName;
    guestData.lastName = lastName;
    guestData.nativeCountry = nativeCountry;
    guestData.contactNumber = contactNumber;
    guestData.emailId = emailId;
    guestData.dob = dob;
    guestData.passportNumber = passportNumber;

    const updateguest = await guestData.save();

    if (updateguest) {
      res.status(201).json({
        error: false,
        message: "Guest Details Updated",
        response: updateguest,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Guest not found",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Delete an Amenity
const deleteGuestDetails = async (req, res, next) => {
  try {
    const guestId = req.params.id;
    const deleteGuest = await GuestDetails.findByIdAndDelete(guestId);
    if (deleteGuest) {
      res.status(201).json({
        error: false,
        message: "Guest Details Deleted!",
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Guest Details not found!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

module.exports = {
  createNewGuest,
  getGuestDetailsList,
  updateGuestDetails,
  deleteGuestDetails,
  getGuestDetailsById,
};
