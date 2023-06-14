const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const User = require("../models/userModel");
const validateMongodbId = require('../utils/validateMongodbId');
const { cloudinaryUploadImage,cloudinaryDeleteImage } = require('../utils/cloudinary');
const fs = require('fs');

const uploadImages = asyncHandler(async (req, res) => {
  try {
    const uploader = (path) => cloudinaryUploadImage(path, 'images');
    const urls = [];
    const files = req.files;
    for (const file of files){
      const { path } = file;
      const newPath = await uploader(path);
      urls.push(newPath);
      fs.unlinkSync(path);
    }
    const images = urls.map(file => {
      return file;
    });
    res.json(images);
  } catch(e){
    throw new Error(e);
  }
});
const deleteImages = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const remover = cloudinaryDeleteImage(id, 'images');
    res.json({meassage: 'deleted'});
  } catch(e){
    throw new Error(e);
  }
});
module.exports = {
	uploadImages,
	deleteImages,
}
