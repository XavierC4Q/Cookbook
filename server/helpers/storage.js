const multer = require('multer')

const recipeStorage = multer.diskStorage({
    destination: 'recipeImages/',
    filename(req, file, cb) {
      console.log('THE FILE ITSELF ', file)
      cb(null, `${new Date()}-${file.originalname}`);
    },
  });

  module.exports = {
      recipeStorage
  }