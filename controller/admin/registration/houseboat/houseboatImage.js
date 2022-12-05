const HBImageModel = require("../../../../model/admin/registration/houseBoat/houseboatActions/hbImageUploadModel");

const uploadHBImage = async (req, res, next) => {
  try {
    const { houseboatID: _id } = req.params;

    const url = req.protocol + "://" + req.get("host");
    let image = url + "/public/images/" + req.files[0].filename;

    const morefiles = req.files;

    let images = [];
    for (i = 0; i < morefiles.length; i++) {
      let elementsofimages = url + "/public/images/" + req.files[i].filename;
      images.push(elementsofimages);
    }

    const imageCreate = await HBImageModel.create(
      { _id: houseboatID },
      { $push: { hbImage: images } },
      { new: true }
    );

    if (imageCreate) {
      res.status(201).json({
        error: false,
        message: "Houseboat Image Uploaded!",
        response: imageCreate,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Houseboat Image Not Uploaded!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

const deleteHBImage = async (req, res, next) => {
  try {
    const { id: _id } = req.params;

    const delImg = await HBImageModel.findByIdAndDelete(_id);

    if (delImg) {
      res.status(201).json({
        error: false,
        message: " Houseboat Image deleted",
      });
    } else {
      res.status(400).json({
        error: true,
        message: " Houseboat Image not deleted",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

module.exports = { uploadHBImage, deleteHBImage };
