const express = require('express');
const { uploadImages, deleteImages } = require('../controller/uploadsControl');
const router = express.Router();
const { isAdmin, authVerify } = require('../middlewares/authMiddleware');
const { uploadPhoto, productImageResize } = require('../middlewares/uploadImages');

router.post('/', authVerify, isAdmin, uploadPhoto.array('images', 10), productImageResize, uploadImages);
router.delete('/delete-image/:id', authVerify, isAdmin, deleteImages);

module.exports = router;
