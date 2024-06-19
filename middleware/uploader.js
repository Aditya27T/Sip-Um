const multer = require('multer');
const path = require('path');

const uploader = (folder) => {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, path.join(__dirname, `../public/uploads/${folder}`));
        },
        filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
        },
    });
    
    const fileFilter = (req, file, cb) => {
        const ext = path.extname(file.originalname);
        if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
        return cb(new Error('Only images are allowed'), false);
        }
        cb(null, true);
    };
    
    return multer({
        storage: storage,
        fileFilter: fileFilter,
        limits: {
        fileSize: 1024 * 1024 * 2,
        },
    });
};

module.exports = uploader;