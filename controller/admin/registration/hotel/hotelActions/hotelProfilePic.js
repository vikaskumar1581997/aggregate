const hotelModel = require("../../../../../model/admin/registration/hotel/hotelModel");

exports.hotelProfileImageUpload = async (req, res, next) => {
  try {
    const hotelId = req.query.id;
    //console.log(req.files,"multi")

    const url = req.protocol + "://" + req.get("host");
    //console.log(url)
    let image = url + "/public/images/" + req.files[0].filename;
    //console.log(image,"image")

    const profilePicture = await hotelModel.findOneAndUpdate(
      { _id: hotelId },
      { imageUpload: image },
      { new: true }
    );

    res.send(profilePicture);
  } catch (err) {
    next(err);
  }
};
