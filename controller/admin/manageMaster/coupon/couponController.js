const Coupon = require("../../../../model/admin/manageMaster/coupon/couponModel");

//Create New Coupon
const createNewCoupon = async (req, res, next) => {
  try {
    const {
      couponCode,
      couponType,
      allHotels,
      particularHotel,
      noOfUsers,
      discountValue,
      discountType,
      validityFrom,
      validityTo,
      couponDescription,
      isActive,
    } = req.body;

    const img = `${req.file.filename}`;
    const couponImage = img.toString("base64");

    const newCoupon = await Coupon.create({
      couponCode,
      couponType,
      allHotels,
      particularHotel,
      noOfUsers,
      discountValue,
      discountType,
      validityFrom,
      validityTo,
      couponDescription,
      isActive,
      couponImage: new Buffer.from(couponImage, "base64"),
    });

    if (newCoupon) {
      res.status(201).json({
        error: false,
        message: "New Coupon created",
        response: newCoupon,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "New Coupon not created",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get all Coupon
const getAllCoupon = async (req, res, next) => {
  try {
    const allCoupon = await Coupon.find().exec();
    if (allCoupon) {
      res.status(201).json({
        error: false,
        message: " Coupon fetched",
        response: allCoupon,
      });
    } else {
      res.status(400).json({
        error: true,
        message: " Coupon not fetched",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Get Single Coupon
const getSingleCoupon = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const singleCoupon = await Coupon.findById(_id).exec();

    if (singleCoupon) {
      res.status(201).json({
        error: false,
        message: "Single Coupon Fetched!",
        response: singleCoupon,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Single Coupon Not Fetched!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Update a Coupon
const updateCoupon = async (req, res, next) => {
  try {
    const { id: _id } = req.params;

    const {
      couponCode,
      couponType,
      allHotels,
      particularHotel,
      noOfUsers,
      discountValue,
      discountType,
      validityFrom,
      validityTo,
      couponDescription,
      isActive,
    } = req.body;

    const img = `${req.file.filename}`;
    const couponImage = img.toString("base64");
    const newCouponImage = new Buffer.from(couponImage, "base64");

    const finalCoupon = await Coupon.findById({ _id });

    console.log(finalCoupon);

    finalCoupon.couponCode = couponCode;
    finalCoupon.couponType = couponType;
    finalCoupon.allHotels = allHotels;
    finalCoupon.particularHotel = particularHotel;
    finalCoupon.noOfUsers = noOfUsers;
    finalCoupon.discountValue = discountValue;
    finalCoupon.discountType = discountType;
    finalCoupon.validityFrom = validityFrom;
    finalCoupon.validityTo = validityTo;
    finalCoupon.couponDescription = couponDescription;
    finalCoupon.isActive = isActive;
    finalCoupon.couponImage = newCouponImage;

    const updatedCoupon = await finalCoupon.save();

    if (updatedCoupon) {
      res.status(201).json({
        error: false,
        message: " Coupon updated",
        response: updatedCoupon,
      });
    } else {
      res.status(400).json({
        error: true,
        message: " Coupon not updated",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

//Delete a Coupon
const deleteCoupon = async (req, res, next) => {
  try {
    const { id: _id } = req.params;

    const delCoupon = await Coupon.findByIdAndDelete({ _id });

    if (delCoupon) {
      res.status(201).json({
        error: false,
        message: " Coupon deleted",
      });
    } else {
      res.status(400).json({
        error: true,
        message: " Coupon not deleted",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

module.exports = {
  createNewCoupon,
  getAllCoupon,
  updateCoupon,
  deleteCoupon,
  getSingleCoupon,
};
