const { ReturnDocument } = require("mongodb");
const hotelModel = require("../../../../../model/admin/registration/hotel/hotelModel");

exports.hotelProfileImageUpload = async (req, res, next) => {
  try {
    const hotelId = req.params.id;
    //console.log(req.files,"multi")

    const url = req.protocol + "://" + req.get("host");
    //console.log(url)
    let image = url + "/public/images/" + req.files[0].filename;
    //console.log(image,"image")

    const profilePicture = await hotelModel.findOneAndUpdate(
      { _id: hotelId, isDeleted: false },
      { imageUpload: image },
      { new: true }
    );

    if (!profilePicture) {
      return res.status(200).json({
        status: false,
        message: "hotel does not exist",
      });
    }

    return res.status(200).json(profilePicture);

  } catch (err) {
    next(err);
  }
};
