//const express = require("express");
const hotelModel = require("../../../../model/admin/registration/hotel/hotelModel");


exports.hotelRegistration = async (req, res, next) => {
  try {
    const hotelData = req.body;
    if (!hotelData) {
      return res.status(400).json({ msg: "data missing" });
    }

    const savedHotel = await hotelModel.create(hotelData);

    return res.status(201).json({
      status: true,
      msg: "hotel registered successfully",
      data:savedHotel
    });
  } catch (err) {
    next(err);
  }
};



exports.getHotelList = async (req, res, next) => {
  const hotelsList = await hotelModel.find()
  return res.status(200).json({
    status: true,
    List: hotelsList,
  });
};

exports.updateHotel = async (req, res, next) => {
  try {
    const hotelId = req.query.id;
    const hotelData = req.body;
    if (!hotelData) {
      return res.status(400).json({ msg: "data missing" });
    }
    console.log(hotelId)
    const updatedHotel = await hotelModel.findOneAndUpdate(
      { _id: hotelId },
      hotelData,
      { new: true }
    );
      console.log(updatedHotel);
    return res.status(200).json({
      status: true,
      msg: "hotel updated successfully",
      data:updatedHotel
    });
  } catch (err) {
    next(err);
  }
};


exports.deleteHotel = async (req, res, next) => {
  try {
    const hotelId = req.query.id;
    // const hotelData = req.body;
    if (!hotelId) {
      return res.status(400).json({ msg: "data missing" });
    }

    const deletedHotel = await hotelModel.findOneAndUpdate(
      { _id: hotelId },
     {isDeleted:true}
    );

    return res.status(200).json({
      status: true,
      msg: "hotel deleted successfully",
      data:deletedHotel
    });
  } catch (err) {
    next(err);
  }
};


