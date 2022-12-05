// const multer = require("multer");
// const path = require("path");

// const storage = multer.diskStorage({
//   destination: "public/images",
//   filename: (req, file, cb) => {
//     return cb(
//       null,
//       `${file.originalname}_${Date.now()}_${path.extname(file.originalname)}`
//     );
//   },
// });

// const upload = multer({
//   storage: storage,
//   limits: {
//     fileSize: 10000000,
//   },
// });

// module.exports = upload;



const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "public/images",
   filename: function (req, file, cb) {
    let ext = path.extname(file.originalname);
     cb(null, Date.now() + ext);
  },
});

var upload = multer({
  storage: storage,
  fileFilter: function (req, file, callback) {
    console.log(file, "upload.js");
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg" ||
      file.mimetype.split("/")[1] === "pdf"
    ) {
      callback(null, true);
    } else {
      console.log("only jpg & png file supported!");
      callback(null, false);
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 1024 * 1024 * 2,
  },
});

module.exports = upload;