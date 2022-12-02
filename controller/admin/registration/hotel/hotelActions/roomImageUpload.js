const hotelModel = require("../../../../../model/admin/registration/hotel/hotelModel");

exports.roomImageUpload = async (req, res, next) => {
  try {
    const hotelId = req.query.id;

    // console.log(hotelId);
    // console.log(req.files, "multi");

    const url = req.protocol + "://" + req.get("host");
    //console.log(url)
    let image = url + "/public/images/" + req.files[0].filename;
    //console.log(image, "image");

    const morefiles = req.files;
   // console.log(morefiles, "more");
    let images = [];
    for (i = 0; i < morefiles.length; i++) {
      let elementsofimages = url + "/public/images/" + req.files[i].filename;
      images.push(elementsofimages);
    }

    //console.log(images);
    const profilePicture = await hotelModel.findOneAndUpdate(
      { _id: hotelId },
      { $push: { roomImageUpload: images } },
      { new: true }
    );

    res.send(profilePicture);
  } catch (err) {
    next(err);
  }
};