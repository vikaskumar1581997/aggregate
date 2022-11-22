const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "public/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.originalname}_${Date.now()}_${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10000000,
  },
});

module.exports = upload;
