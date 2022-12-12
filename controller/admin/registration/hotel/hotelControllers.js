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
      data: savedHotel,
    });
  } catch (err) {
    next(err);
  }
};

exports.getHotelList = async (req, res, next) => {
  const hotelsList = await hotelModel.find({ isDeleted: false });
  return res.status(200).json({
    status: true,
    List: hotelsList,
  });
};

exports.updateHotel = async (req, res, next) => {
  try {
    const hotelId = req.params.id;
    const hotelData = req.body;
    if (!hotelData) {
      return res.status(400).json({ msg: "data missing" });
    }
    console.log(hotelId);
    const updatedHotel = await hotelModel.findOneAndUpdate(
      { _id: hotelId, isDeleted: false },
      hotelData,
      { new: true }
    );
    //console.log(updatedHotel);
    if (!updatedHotel) {
      return res.status(400).json({
        status: true,
        msg: "hotel does not found",
      });
    }
    return res.status(200).json({
      status: true,
      msg: "hotel updated successfully",
      data: updatedHotel,
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteHotel = async (req, res, next) => {
  try {
    const hotelId = req.params.id;
    // const hotelData = req.body;
    if (!hotelId) {
      return res.status(400).json({ msg: "data missing" });
    }

    const deletedHotel = await hotelModel.findOneAndUpdate(
      { _id: hotelId, isDeleted: false },
      { isDeleted: true },
      { new: true }
    );
    console.log(deletedHotel);
    if (!deletedHotel) {
      return res.status(400).json({
        status: true,
        msg: "hotel does not found",
      });
    }
    return res.status(200).json({
      status: true,
      msg: "hotel deleted successfully",
      data: deletedHotel,
    });
  } catch (err) {
    next(err);
  }
};