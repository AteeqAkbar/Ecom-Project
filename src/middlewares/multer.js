const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/data/uploads")
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)

    }
})
const file = multer({ storage: storage })
module.exports = file