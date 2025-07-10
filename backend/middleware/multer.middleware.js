const multer = require('multer');
const path = require('path');
const fs = require('fs');

const upload = multer({
  dest: 'uploads/',
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== '.pdf') return cb(new Error('Only PDFs allowed'), false);
    cb(null, true);
  }
});

module.exports = upload;