const ShikaraImageModel = require("../../../../model/admin//registration/shikara/shikaraActions/shikaraImageModel");

const uploadImage = async (req, res, next) => {
  try {
    const { shikaraID: _id } = req.params;

    const url = req.protocol + "://" + req.get("host");
    let image = url + "/public/images/" + req.files[0].filename;

    const morefiles = req.files;

    let images = [];
    for (i = 0; i < morefiles.length; i++) {
      let elementsofimages = url + "/public/images/" + req.files[i].filename;
      images.push(elementsofimages);
    }

    const imageCreate = await ShikaraImageModel.create(
      { _id: shikaraID },
      { $push: { shikaraImage: images } },
      { new: true }
    );

    if (imageCreate) {
      res.status(201).json({
        error: false,
        message: "Shikara Image Uploaded!",
        response: imageCreate,
      });
    } else {
      res.status(400).json({
        error: true,
        message: "Shikara Image Not Uploaded!",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

const deleteImage = async (req, res, next) => {
  try {
    const { id: _id } = req.params;

    const delImg = await ShikaraImageModel.findByIdAndDelete(_id);

    if (delImg) {
      res.status(201).json({
        error: false,
        message: " Shikara Image deleted",
      });
    } else {
      res.status(400).json({
        error: true,
        message: " Shikara Image not deleted",
      });
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

module.exports = { uploadImage, deleteImage };
