const multer = require('multer');

// const upload  = multer({dest: './assets'});

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './assets');
    },
    filename: function (req, file, cb) {
        cb(null , file.originalname);
    }
});

const upload = multer({ storage: storage})

module.exports = upload;

