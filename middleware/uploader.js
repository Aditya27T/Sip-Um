const multer = require("multer");
const path = require("path");
const __basedir = path.resolve(path.dirname(''));
const imageFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
        cb(null, true);
    } else {
        cb("Please upload only images.", false);
    }
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__basedir, "/public/uploads/"));
    },
    filename: (req, file, cb) => {
        cb(null, `laporan-${Date.now()}-${file.originalname}`);
    },
});

const uploadFile = multer({ storage: storage, fileFilter: imageFilter });

module.exports = uploadFile;