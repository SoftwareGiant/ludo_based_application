const multer = require("multer");
const { imgNamegenerator } = require("./stringGenerator");

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    const fileName =
      imgNamegenerator() +
      "_" +
      file.originalname.toLowerCase().split(" ").join("-");
    cb(null, fileName);
  },
});

module.exports.upload = multer({
  storage: multerStorage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg" ||
      file.mimetype == "image/gif" ||
      file.mimetype == "application/pdf"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Allowed only .png, .jpg, .jpeg .gif and mp4"));
    }
  },
});